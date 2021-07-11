import styled from '@emotion/styled';
import React from 'react';

import { PostContent } from '@/lib/posts';
import {
  alignCenter,
  borderBottomSolidGrey30,
  flex,
  flexColumn,
  justifySpaceBetween,
  textBlack,
  textGrey40,
  textGrey200
} from '@/styles/css';
import theme from '@/styles/theme';

interface CardProps {
  post: PostContent;
  onClick: (slug: string) => void;
}

const Card: React.FC<CardProps> = ({ post, onClick }) => {
  return (
    <Container role="button" onClick={() => onClick(post.slug)}>
      <Contents>
        {post.tags?.map((tag) => (
          <Tag key={tag.slug}>{tag.name}</Tag>
        ))}
        <Title>{post.title}</Title>
        <Date dateTime={post.date}>{post.date}</Date>
      </Contents>
      {post.cover && <Thumbnail src={post.cover} />}
    </Container>
  );
};

export default React.memo(Card);

const Contents = styled.div`
  ${flexColumn}
  width: calc(100% - 160px);

  ${theme.media.mobile} {
    width: calc(100% - 107px);
  }
`;

const Title = styled.h3`
  ${textBlack}
  font-weight: bold;
  font-size: 22px;
  line-height: 1;
  color: #000;
  font-weight: normal;
  text-overflow: ellipsis;
  white-space: nowrap;

  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
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

const Container = styled.div`
  ${flex}
  ${justifySpaceBetween}
  ${alignCenter}
  ${borderBottomSolidGrey30}
  height: 192px;
  padding: 32px 0;

  &:hover ${Title} {
    text-decoration: underline;
  }

  ${theme.media.mobile} {
    height: 163px;
  }
`;

const Thumbnail = styled.img`
  width: 150px;
  height: 128px;
  border-radius: 4px;
  object-fit: cover;

  ${theme.media.mobile} {
    width: 98px;
    height: 82px;
  }
`;
