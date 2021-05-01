import styled from '@emotion/styled';
import React from 'react';

import { backgroundGrey20 } from '@/styles/css';

const ImageContainer = styled.div`
  position: relative;
  width: 171px;
  height: 82px;

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
}

const CoverImage: React.FC<ImageCoverProps> = ({ src }) => {
  return (
    <ImageContainer>
      <img src={src} alt="cover" width={171} height={82} loading="lazy" />
    </ImageContainer>
  );
};

export default React.memo(CoverImage);
