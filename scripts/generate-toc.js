const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const glob = require('glob');

const BOOKS_DIR = path.join(__dirname, '../docs/books');

// 책 폴더에서 .md 파일들을 찾아서 title을 추출하는 함수
function extractTitlesFromBookFolder(bookFolderPath) {
  const bookName = path.basename(bookFolderPath);
  const mdFiles = glob.sync(path.join(bookFolderPath, '*.md'));

  const tocItems = [];

  mdFiles.forEach((filePath) => {
    const fileName = path.basename(filePath, '.md');

    // index.md는 건너뛰기
    if (fileName === 'index') {
      return;
    }

    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data: frontmatter } = matter(fileContent);

      // frontmatter에서 title 추출, 없으면 파일명 사용
      const title = frontmatter.title || fileName;

      tocItems.push({
        title,
        fileName,
        path: filePath,
      });
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error.message);
    }
  });

  // 파일명 순으로 정렬
  tocItems.sort((a, b) => {
    // intro나 preface가 포함된 파일들을 맨 앞으로
    const aIsIntro = a.fileName.toLowerCase().includes('intro') || a.fileName.toLowerCase().includes('preface');
    const bIsIntro = b.fileName.toLowerCase().includes('intro') || b.fileName.toLowerCase().includes('preface');

    if (aIsIntro && !bIsIntro) return -1;
    if (!aIsIntro && bIsIntro) return 1;
    if (aIsIntro && bIsIntro) {
      // 둘 다 intro/preface면 introduction이 preface보다 앞에 오도록
      const aIsIntroOnly = a.fileName.toLowerCase().includes('intro') && !a.fileName.toLowerCase().includes('preface');
      const bIsIntroOnly = b.fileName.toLowerCase().includes('intro') && !b.fileName.toLowerCase().includes('preface');
      if (aIsIntroOnly && !bIsIntroOnly) return -1;
      if (!aIsIntroOnly && bIsIntroOnly) return 1;
    }

    // intro/preface가 아닌 경우 숫자로 시작하는 파일들을 먼저 정렬
    const aNum = parseInt(a.fileName) || 999;
    const bNum = parseInt(b.fileName) || 999;

    if (aNum !== bNum) {
      return aNum - bNum;
    }

    // 숫자가 같으면 문자열로 정렬
    return a.fileName.localeCompare(b.fileName);
  });

  return tocItems;
}

// 목차를 markdown으로 생성하는 함수
function generateTOC(tocItems, bookName) {
  let toc = `---
title: ${bookName}
sidebar_position: 1
slug: /books/${bookName}/
---

# ${bookName}

`;

  tocItems.forEach((item) => {
    toc += `- [${item.title}](${item.fileName}.md)\n`;
  });

  return toc;
}

// 메인 함수
function generateAllTOCs() {
  console.log('📚 책 목차 생성 시작...');

  // books 폴더 하위의 모든 폴더 찾기
  const bookFolders = glob.sync(path.join(BOOKS_DIR, '*/'), { absolute: true });

  bookFolders.forEach((bookFolderPath) => {
    const bookName = path.basename(bookFolderPath);
    console.log(`\n📖 ${bookName} 처리 중...`);

    try {
      const tocItems = extractTitlesFromBookFolder(bookFolderPath);

      if (tocItems.length === 0) {
        console.log(`  ⚠️  ${bookName}: .md 파일을 찾을 수 없습니다.`);
        return;
      }

      const toc = generateTOC(tocItems, bookName);
      const indexPath = path.join(bookFolderPath, 'index.md');

      fs.writeFileSync(indexPath, toc, 'utf8');
      console.log(`  ✅ ${bookName}: ${tocItems.length}개 항목으로 목차 생성 완료`);
    } catch (error) {
      console.error(`  ❌ ${bookName} 처리 중 오류:`, error.message);
    }
  });

  console.log('\n🎉 모든 책 목차 생성 완료!');
}

// 스크립트 실행
if (require.main === module) {
  generateAllTOCs();
}

module.exports = { generateAllTOCs, extractTitlesFromBookFolder, generateTOC };
