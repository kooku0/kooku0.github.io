import '~/global.d';

import tags from '~/meta/tags.yml';

export type TagContent = {
  readonly slug: string;
  readonly name: string;
};

const tagMap: { [key: string]: TagContent } = generateTagMap();

function generateTagMap(): { [key: string]: TagContent } {
  const result: { [key: string]: TagContent } = {};
  tags.tags.forEach((tag: TagContent) => {
    result[tag.slug] = tag;
  });

  return result;
}

export function getTag(slug: string) {
  return tagMap[slug];
}

export function listTags(): TagContent[] {
  return tags.tags;
}
