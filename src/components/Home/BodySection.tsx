import styled from '@emotion/styled';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { PostContent } from '@/lib/posts';
import { TagContent, TotalTag } from '@/lib/tags';

import MainCardList from '../CardList';
import TagList from '../TagList';

const SNAP_SENSITIVITY = 100;

interface Props {
  posts: PostContent[];
  tags: TagContent[];
  scrollToTop: (ref: React.RefObject<Element>) => void;
}

const BodySection: React.FC<Props> = ({ posts, tags, scrollToTop }) => {
  const [activeTagIdx, setActiveTagIdx] = useState(0);
  const [activeTagPosts, setActiveTagPosts] = useState<PostContent[]>([]);

  const tagListRef = useRef<HTMLDivElement>(null);
  const contentsRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    moveActiveTagToCenter();
    updatedPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTagIdx]);

  const moveActiveTagToCenter = () => {
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
  };

  const updatedPosts = () => {
    setActiveTagPosts(postsByTag[tags[activeTagIdx].slug]);
  };

  const postsByTag: { [key: string]: PostContent[] } = useMemo(() => {
    const obj: { [key: string]: PostContent[] } = {};
    obj.total = [...posts];
    tags.forEach((tag) => {
      if (tag.slug !== TotalTag.slug) {
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
    if (touchStart - touchEnd > SNAP_SENSITIVITY && activeTagIdx < tags.length - 1) {
      setActiveTagIdx(activeTagIdx + 1);
      scrollToTop(contentsRef);
    }

    if (touchStart - touchEnd < -SNAP_SENSITIVITY && activeTagIdx > 0) {
      setActiveTagIdx(activeTagIdx - 1);
      scrollToTop(contentsRef);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touchStart, touchEnd, activeTagIdx]);

  const updateActiveTag = useCallback(
    (index: number) => {
      setActiveTagIdx(index);
      scrollToTop(contentsRef);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeTagIdx]
  );

  return (
    <section ref={contentsRef}>
      <TagListWrapper ref={tagListRef}>
        <TagList tags={tags} activeTag={activeTagIdx} updateActiveTag={updateActiveTag} />
      </TagListWrapper>
      <MainCardListContainer
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <MainCardList posts={activeTagPosts} />
      </MainCardListContainer>
    </section>
  );
};

export default BodySection;

const TagListWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
  z-index: 10;
`;

const MainCardListContainer = styled.div`
  display: flex;
  justify-content: center;
`;
