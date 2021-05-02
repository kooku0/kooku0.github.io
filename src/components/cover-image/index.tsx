import styled from '@emotion/styled';
import React from 'react';

import { backgroundGrey20 } from '@/styles/css';

const ImageContainer = styled.div<{ width?: number }>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
`;

const ImageWrapper = styled.div`
  position: relative;

  &::after {
    ${backgroundGrey20}
    display: block;
    content: '';
    padding-bottom: calc(100% * (6.6 / 13));
  }

  & > img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

interface ImageCoverProps {
  src: string;
  width?: number;
}

const CoverImage: React.FC<ImageCoverProps> = ({ src, width }) => {
  return (
    <ImageContainer width={width}>
      <ImageWrapper>
        <img src={src} alt="cover" width={123} height={82} loading="lazy" />
      </ImageWrapper>
    </ImageContainer>
  );
};

export default React.memo(CoverImage);
