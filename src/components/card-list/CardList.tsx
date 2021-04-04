import React from 'react';
import styled from '@emotion/styled';

import Card from '@/components/card';
import { PostContent } from '@/lib/posts';
import { spacing } from '@/styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
`;

const CardContainer = styled.div`
  flex: 0 0 auto;
  overflow: hidden;
  margin: 10px 16px;
  border-radius: 8px;
  padding: 16px;
  border: 2px solid lightgray;
`;

const Contents = styled.div`
  padding: 16px 0 14px 0;
  display: table;
  table-layout: fixed;
  width: 100%;
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.color.grey500};
  font-size: 14px;
  font-weight: bold;
  line-height: 1.57;
  margin-right: 8px;
`;

const Date = styled.time`
  display: block;
  font-size: 0.7rem;
  margin-top: 0.5rem;
  color: darkgray;
  font-weight: bold;
  line-height: 1.57;
`;

const Title = styled.h3`
  display: table-cell;
  margin-top: 4px;
  color: black;
  font-size: 18px;
  width: 100%;
  font-weight: bold;
  line-height: 1.56;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

interface CardListProps {
  posts: PostContent[];
}

const CardList: React.FC<CardListProps> = ({ posts }) => {
  return (
    <Container>
      {posts.map((post: PostContent) => (
        <CardContainer key={post.slug} className="card">
          <Card coverImage={post.cover} to={`/posts/${post.slug}`}>
            <Contents>
              {post.tags
                ?.filter((item) => item.slug !== 'topic')
                ?.slice(0, 2)
                ?.map((tag) => (
                  <Tag key={tag.slug}>{tag.name}</Tag>
                ))}
              <Title>{post.title}</Title>
              <Date dateTime={post.date}>{post.date}</Date>
            </Contents>
          </Card>
        </CardContainer>
      ))}
      <div css={[spacing.padding(4)]} />
    </Container>
  );
};

export default React.memo(CardList);
