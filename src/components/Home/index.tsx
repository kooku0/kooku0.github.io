import styled from '@emotion/styled';
import React, { useRef } from 'react';

import { PostContent } from '@/lib/posts';
import { TagContent } from '@/lib/tags';

import BodySection from './BodySection';
import HeaderSection from './HeaderSection';

interface Props {
  posts: PostContent[];
  tags: TagContent[];
}

const Home: React.FC<Props> = ({ posts, tags }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTopInElement = (outerRef: React.RefObject<Element>) => (
    ref: React.RefObject<Element>
  ) => {
    if (ref.current && outerRef.current) {
      const { top: contentsTop } = ref.current.getBoundingClientRect();
      const { top: containerTop } = outerRef.current.getBoundingClientRect();
      window.scrollTo(0, -containerTop + contentsTop);
    }
  };

  return (
    <>
      <HeaderSection />
      <Container ref={containerRef}>
        <BodySection posts={posts} tags={tags} scrollToTop={scrollToTopInElement(containerRef)} />
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  -webkit-overflow-scrolling: auto;
  overscroll-behavior: none;
  scroll-behavior: smooth;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
