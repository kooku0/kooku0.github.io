import '~/@types/global.d';

import tags from '~/meta/tags.yml';

export type TagContent = {
  readonly slug: string;
  readonly name: string;
};

function generateTagMap(): { [key: string]: TagContent } {
  const result: { [key: string]: TagContent } = {};
  tags.tags.forEach((tag: TagContent) => {
    result[tag.slug] = tag;
  });

  return result;
}

const tagMap: { [key: string]: TagContent } = generateTagMap();

export function getTag(slug: string) {
  return tagMap[slug];
}

export function listTags(): TagContent[] {
  return tags.tags;
}
