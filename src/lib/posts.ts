import fs from 'fs';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import path, { join } from 'path';

import { getTag, listTags, TagContent } from './tags';

const postsDirectory = path.join(process.cwd(), '_posts');

export type PostContent = {
  readonly date: string;
  readonly title: string;
  readonly slug: string;
  readonly cover: string;
  readonly tags?: TagContent[];
};

let postCache: PostContent[];

function fetchPostContent(): PostContent[] {
  if (postCache) {
    return postCache;
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    ?.filter((it: any) => it.endsWith('.mdx'))
    ?.map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          // eslint-disable-next-line @typescript-eslint/ban-types
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object
        }
      });
      const matterData = matterResult.data as {
        date: string;
        title: string;
        tags: string[] | TagContent[];
        cover: string;
        slug: string;
      };
      const slug = fileName.replace(/\.mdx$/, '');

      matterData.slug = slug;

      const tags = listTags();

      matterData.tags = (matterData.tags as string[])?.map(
        (tag) => tags.find(({ slug: slugOfTag }) => slugOfTag === tag) ?? { slug: '', name: '' }
      );

      return matterData;
    });
  // Sort posts by date
  postCache = allPostsData.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  }) as PostContent[];
  return postCache;
}

export function countPosts(tag?: string): number {
  return fetchPostContent().filter((it: any) => !tag || (it.tags && it.tags.includes(tag))).length;
}

export function listPostContent(): PostContent[] {
  return fetchPostContent();
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: any = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }

    if (field === 'tags') {
      items[field] = items[field]?.map((item: string) => ({
        slug: item,
        name: getTag(item).name
      }));
    }
  });

  return items;
}
