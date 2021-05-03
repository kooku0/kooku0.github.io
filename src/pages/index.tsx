import styled from '@emotion/styled';
import { GetStaticProps } from 'next';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import CardList from '@/components/card-list/CardList';
import Profile from '@/components/profile';
import TagList from '@/components/tag-list';
import { listPostContent, PostContent } from '@/lib/posts';
import { listTags, TagContent } from '@/lib/tags';
import SectionContainer from '@/styles/container/SectionContainer';
import metaConfig from '~/meta-config';

const Container = styled.div`
  position: relative;
  -webkit-overflow-scrolling: auto;
  overscroll-behavior: none;
  scroll-behavior: smooth;
  scrollbar-width: none;

  scroll-snap-type: y proximity;
  scroll-snap-stop: normal;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h1`
  padding: 32px 0 16px 0;
  font-size: 32px;
  font-weight: 800;
  line-height: 1.45;
  color: black;

  ${({ theme }) => theme.media.mobile} {
    font-size: 22px;
    font-weight: bold;
  }
`;

const TagListWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
  z-index: 10;
`;

const Section = styled.section`
  ${SectionContainer};
  scroll-snap-align: start;
`;

const HeaderSection = styled(Section)`
  margin: 0 16px;
`;

const Posts = styled.div`
  overflow-x: hidden;
`;

const CardListSection = styled.section<{ sectionNum: number; height: number }>`
  display: flex;
  width: ${({ sectionNum }) => sectionNum * 100}%;
  height: ${({ height }) => height}px;
  overflow-y: hidden;
`;

const CardListContainer = styled.div<{ tagIndex: number }>`
  transition: 0.2s;
  width: 100%;
  transform: ${({ tagIndex }) => `translateX(${tagIndex * -100}%)`};
`;

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

interface HomeProps {
  posts: PostContent[];
  tags: TagContent[];
}

const NAVBAR_HEIGHT = 50;
const MIN_WINDOW_HEIGHT = 500;
const CARD_LIST_CLASSNAME_POSTFIX = '-list';

const parsedListClassName = (slug: string) => {
  return slug.split(' ').join('-');
};

const Home: React.FC<HomeProps> = ({ posts, tags }) => {
  const [activeTagIdx, setActiveTagIdx] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [heightByTag, setHeightByTag] = useState<number[]>([]);
  const tagListRef = useRef<HTMLDivElement>(null);
  const contentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setHeights = () => {
      const windowHeight =
        MIN_WINDOW_HEIGHT <= global.innerHeight - NAVBAR_HEIGHT
          ? global.innerHeight - NAVBAR_HEIGHT
          : MIN_WINDOW_HEIGHT;

      const heights = tags.map(({ slug }) => {
        const height = (document?.querySelector(
          `.${parsedListClassName(slug)}${CARD_LIST_CLASSNAME_POSTFIX}`
        )?.firstChild as HTMLDivElement)?.clientHeight;

        return height > windowHeight ? height : windowHeight;
      });
      setHeightByTag(heights);
    };

    window.addEventListener('resize', setHeights);

    return () => {
      window.removeEventListener('resize', setHeights);
    };
  }, [tags]);

  useEffect(() => {
    if (contentsRef.current) {
      contentsRef.current.scrollIntoView();
    }
  }, [activeTagIdx]);

  useEffect(() => {
    if (tagListRef.current) {
      const tagContainerElm: HTMLDivElement = tagListRef.current.firstChild as HTMLDivElement;
      const tagElm: HTMLDivElement = tagContainerElm.childNodes[activeTagIdx] as HTMLDivElement;

      const { x: tagX, width: tagWidth } = tagElm.getBoundingClientRect();

      if (tagX < 0) {
        tagContainerElm.scrollTo(tagContainerElm.scrollLeft + tagX, 0);
      } else if (tagX + tagWidth > window.innerWidth) {
        tagContainerElm.scrollTo(
          tagX + tagWidth + tagContainerElm.scrollLeft - window.innerWidth,
          0
        );
      }
    }
  }, [activeTagIdx]);

  const postsByTag: { [key: string]: PostContent[] } = useMemo(() => {
    const obj: { [key: string]: PostContent[] } = {};
    obj.total = [...posts];
    tags.forEach((tag) => {
      if (tag.slug !== 'total') {
        obj[tag.slug] = posts.filter(
          (post) => post.tags?.findIndex(({ slug }) => slug === tag.slug) !== -1
        );
      }
    });
    return obj;
  }, [posts, tags]);

  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStart - touchEnd > 100 && activeTagIdx < tags.length - 1) {
      setActiveTagIdx(activeTagIdx + 1);
    }

    if (touchStart - touchEnd < -100 && activeTagIdx > 0) {
      setActiveTagIdx(activeTagIdx - 1);
    }
  }, [touchStart, touchEnd, activeTagIdx, tags.length]);

  const updateActiveTag = useCallback((index: number) => setActiveTagIdx(index), []);

  return (
    <>
      <Container>
        <HeaderSection>
          <Title>{metaConfig.title}</Title>
          <Profile />
        </HeaderSection>
        <Section ref={contentsRef}>
          <TagListWrapper ref={tagListRef}>
            <TagList tags={tags} activeTag={activeTagIdx} updateActiveTag={updateActiveTag} />
          </TagListWrapper>
          <Posts
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <CardListSection sectionNum={tags.length} height={heightByTag[activeTagIdx]}>
              {tags.map((tag) => (
                <CardListContainer
                  key={tag.slug}
                  tagIndex={activeTagIdx}
                  className={`${parsedListClassName(tag.slug)}${CARD_LIST_CLASSNAME_POSTFIX}`}
                >
                  <CardList posts={postsByTag[tag.slug]} />
                </CardListContainer>
              ))}
            </CardListSection>
          </Posts>
        </Section>
      </Container>
    </>
  );
};

export default Home;
