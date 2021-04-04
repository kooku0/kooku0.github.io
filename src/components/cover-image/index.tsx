import React from 'react';
import styled from '@emotion/styled';

const ImageContainer = styled.div`
  position: relative;

  &::after {
    display: block;
    content: '';
    background-color: ${({ theme }) => theme.color.greyOpacity200};
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
      <img src={src} alt="cover" width={343} height={184} loading="lazy" />
    </ImageContainer>
  );
};

export default CoverImage;
