import styled from '@emotion/styled';
import React from 'react';

import { PostContent } from '@/lib/posts';
import {
  alignCenter,
  backgroundBlue300,
  borderBottomSolidGrey30,
  flex,
  justifySpaceBetween,
  textBlack,
  textGrey40,
  textGrey200
} from '@/styles/css';

import Thumbnail from './Thumbnail';

interface CardProps {
  post: PostContent;
  onClick: (slug: string) => void;
}

const Card: React.FC<CardProps> = ({ post, onClick }) => {
  return (
    <Container role="button" onClick={() => onClick(post.slug)}>
      <InnerContainer>
        <Contents>
          {post.tags?.map((tag) => (
            <Tag key={tag.slug}>{tag.name}</Tag>
          ))}
          <Title>{post.title}</Title>
          <Date dateTime={post.date}>{post.date}</Date>
        </Contents>
        <Thumbnail src={post.cover} />
      </InnerContainer>
    </Container>
  );
};

export default React.memo(Card);

const Title = styled.h3`
  ${textBlack}
  font-weight: bold;
  font-size: 22px;
  line-height: 1.3;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const Tag = styled.span`
  ${textGrey200}
  font-size: 14px;
  font-weight: bold;
  line-height: 1.57;
  margin-right: 8px;
  padding-bottom: 6px;
`;

const Date = styled.time`
  ${textGrey40}
  display: block;
  font-size: 13px;
  line-height: 14px;
  margin-top: 8px;
`;

const Contents = styled.div`
  width: 100%;
`;

const InnerContainer = styled.div`
  ${flex}
  ${alignCenter}
  ${justifySpaceBetween}
  width: 100%;
  height: 100%;
  background-color: white;
  transition-duration: 1s;
  padding: 32px 10px;

  &:hover {
    transform: translateX(7px);

    ${Title} {
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-position: under;
    }

    ${Thumbnail} {
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
    }
  }
`;

const Container = styled.div`
  ${borderBottomSolidGrey30}
  ${backgroundBlue300}
`;
