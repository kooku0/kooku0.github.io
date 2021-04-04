import React, { ReactChild, useCallback } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

import CoverImage from '@/components/cover-image';

const Container = styled.div<{ width?: number }>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: 100%;
  overflow: hidden;
  cursor: pointer;
`;

interface CardProps {
  coverImage: string;
  width?: number;
  to: string;
  children: ReactChild | ReactChild[];
}

const Card: React.FC<CardProps> = ({ width, to, children, coverImage }) => {
  return (
    <Link href={to}>
      <div>
        {coverImage && <CoverImage src={coverImage} />}
        <Container width={width}>
          <div>{children}</div>
        </Container>
      </div>
    </Link>
  );
};

export default React.memo(Card);
