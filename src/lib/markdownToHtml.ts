import rehypePrism from '@mapbox/rehype-prism';
import remarkStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import unified from 'unified';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(remarkStringify)
    .process(markdown);
  return result.toString();
}
