import styled from '@emotion/styled';
import React from 'react';

import { backgroundGrey20 } from '@/styles/css';

const ImageContainer = styled.div<{ width?: number }>`
  position: relative;
  ${({ width }) => width && `width: ${width}px`}

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
      <img src={src} alt="cover" width={123} height={82} loading="lazy" />
    </ImageContainer>
  );
};

export default React.memo(CoverImage);
