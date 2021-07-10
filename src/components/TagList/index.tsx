import styled from '@emotion/styled';
import React from 'react';

import { TagContent } from '@/lib/tags';
import { TextButton } from '@/styles/components/button';
import {
  backgroundWhite,
  borderBottomSolidBlue300,
  borderBottomSolidGrey30,
  flex,
  textBlue300,
  textGrey40
} from '@/styles/css';

interface TagListProps {
  tags: TagContent[];
  activeTag: number;
  updateActiveTag(tagIndex: number): void;
}

const TagList: React.FC<TagListProps> = ({ tags, activeTag, updateActiveTag }) => {
  return (
    <Container>
      <div>
        {tags?.map((tag, index) => (
          <Tag key={tag.slug} active={index === activeTag} onClick={() => updateActiveTag(index)}>
            {tag.name}
          </Tag>
        ))}
      </div>
    </Container>
  );
};

export default React.memo(TagList);

const Container = styled.div`
  ${backgroundWhite}
  ${borderBottomSolidGrey30}

  & > div {
    ${flex}
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
    max-width: 1024px;
    margin: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Tag = styled(TextButton)<{ active: boolean }>`
  ${({ active }) => (active ? textBlue300 : textGrey40)}
  ${({ active }) => (active ? borderBottomSolidBlue300 : 'none')}
  border-width: 4px;
  padding: 6px 0;
  margin: 6px 16px;
  font-size: 16px;
  font-weight: bold;
  flex: 0 0 auto;
  line-height: 1.5;
`;
