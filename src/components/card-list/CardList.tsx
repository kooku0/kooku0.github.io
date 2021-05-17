import styled from '@emotion/styled';
import React from 'react';

import Card from '@/components/card';
import { PostContent } from '@/lib/posts';
import { borderSolidGrey40, textBlack, textGrey40, textGrey200 } from '@/styles/css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
`;

const CardContainer = styled.div`
  ${borderSolidGrey40}
  border-width: 2px;
  flex: 0 0 auto;
  overflow: hidden;
  margin: 5px 8px;
  border-radius: 8px;
  padding: 16px;

  &:first-of-type {
    margin-top: 10px;
  }

  ${({ theme }) => theme.media.mobile} {
    margin: 2px 8px;
  }
`;

const Contents = styled.div`
  padding: 16px 0 14px 0;
  display: table;
  table-layout: fixed;
  width: 100%;

  ${({ theme }) => theme.media.mobile} {
    padding: 0;
  }
`;

const Tag = styled.span`
  ${textGrey200}
  font-size: 14px;
  font-weight: bold;
  line-height: 1.57;
  margin-right: 8px;
`;

const Date = styled.time`
  ${textGrey40}
  display: block;
  font-size: 0.7rem;
  margin-top: 0.5rem;
  font-weight: bold;
  line-height: 1.57;
`;

const Title = styled.h3`
  ${textBlack}
  display: table-cell;
  margin-top: 4px;
  font-size: 18px;
  width: 100%;
  font-weight: bold;
  line-height: 1.2;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CARD_CLASSNAME = 'card';

interface CardListProps {
  posts: PostContent[];
}

const CardList: React.FC<CardListProps> = ({ posts }) => {
  return (
    <Container>
      {posts?.map((post: PostContent) => (
        <CardContainer key={post.slug} className={CARD_CLASSNAME}>
          <Card coverImage={post.cover} to={`/posts/${post.slug}`}>
            <Contents>
              {post.tags?.map((tag) => (
                <Tag key={tag.slug}>{tag.name}</Tag>
              ))}
              <Title>{post.title}</Title>
              <Date dateTime={post.date}>{post.date}</Date>
            </Contents>
          </Card>
        </CardContainer>
      ))}
    </Container>
  );
};

export default React.memo(CardList);
