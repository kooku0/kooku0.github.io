import React from 'react';
import styled from '@emotion/styled';

import { TagContent } from '@/lib/tags';

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey200};

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tag = styled.div<{ active: boolean }>`
  padding: 12px 16px;
  font-size: 16px;
  font-weight: bold;
  flex: 0 0 auto;
  line-height: 1.5;
  cursor: pointer;
  color: ${({ theme, active }) => (active ? theme.color.blue500 : theme.color.grey400)};
  border-bottom: ${({ active, theme }) =>
    active ? `2px solid ${theme.color.blue500}` : `0px solid ${theme.color.grey200}`};
`;

interface TagListProps {
  tags: TagContent[];
  activeTag: number;
  updateActiveTag(tagIndex: number): void;
}

const TagList: React.FC<TagListProps> = ({ tags, activeTag, updateActiveTag }) => {
  return (
    <Container>
      {tags.map((tag, index) => (
        <Tag key={tag.slug} active={index === activeTag} onClick={() => updateActiveTag(index)}>
          {tag.name}
        </Tag>
      ))}
    </Container>
  );
};

export default React.memo(TagList);
