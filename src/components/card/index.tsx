import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

import CoverImage from '@/components/cover-image';
import { alignCenter, flex, justifySpaceBetween } from '@/styles/css';

const Container = styled.div`
  ${flex}
  ${justifySpaceBetween}
  ${alignCenter}
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

interface CardProps {
  coverImage: string;
  to: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ to, children, coverImage }) => {
  return (
    <Link href={to}>
      <Container>
        {children}
        {coverImage && <CoverImage src={coverImage} />}
      </Container>
    </Link>
  );
};

export default React.memo(Card);
