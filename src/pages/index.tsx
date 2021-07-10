import { GetStaticProps } from 'next';
import React from 'react';

import Home from '@/components/Home';
import { listPostContent, PostContent } from '@/lib/posts';
import { listTags, TagContent } from '@/lib/tags';

export const getStaticProps: GetStaticProps = async () => {
  const tagSet = new Set();
  const posts = listPostContent();
  let tags = listTags();

  posts.forEach((post) =>
    post.tags?.forEach((tag) => tagSet.has(tag.slug) || tagSet.add(tag.slug))
  );

  tags = tags.filter((tag) => tagSet.has(tag.slug));

  return {
    props: {
      posts,
      tags: [{ slug: 'total', name: 'Total' }, ...tags]
    }
  };
};

interface Props {
  posts: PostContent[];
  tags: TagContent[];
}

export const LIMIT_OF_PAGE = 5;

const HomePage: React.FC<Props> = (props) => {
  return (
    <>
      <Home {...props} />
    </>
  );
};

export default HomePage;
