import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { PostContent } from '@/lib/posts';
import { LIMIT_OF_PAGE } from '@/pages';
import { spacing } from '@/styles';
import { TransitionFade } from '@/styles/transition';

import Card from '../card';

interface Props {
  posts: PostContent[];
}

const CardList: React.FC<Props> = ({ posts: postsByTag }) => {
  const [posts, setPosts] = useState<PostContent[]>([]);

  useEffect(() => {
    setPosts(postsByTag.slice(0, LIMIT_OF_PAGE));
  }, [postsByTag]);

  function loadNextPage(page: number) {
    try {
      const nextPosts = postsByTag.slice(0, page * LIMIT_OF_PAGE);
      setPosts(nextPosts);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <TransitionFade duration={1000}>
        <TransitionGroup>
          <InfiniteScroll
            loadMore={loadNextPage}
            hasMore={posts.length < (postsByTag.length ?? LIMIT_OF_PAGE)}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            {posts.map((post: PostContent) => (
              <CSSTransition key={post.slug} in exit={false} timeout={1000} classNames="fade">
                <Card post={post} />
              </CSSTransition>
            ))}
          </InfiniteScroll>
          <div css={[spacing.padding(4)]} />
        </TransitionGroup>
      </TransitionFade>
    </Container>
  );
};

export default React.memo(CardList);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  padding: 1rem;
  max-width: 896px;
  width: 100%;
`;
