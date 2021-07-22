import styled from '@emotion/styled';
import React, { forwardRef, ImgHTMLAttributes, Ref } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement>;

const Image = forwardRef(function (props: Props, forwardedRef: Ref<HTMLImageElement>) {
  const { ...rest } = props;

  return <StyledImage ref={forwardedRef} {...rest} visible={!!props.src} />;
});

export default Image;

const StyledImage = styled.img<{ visible: boolean }>`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  object-fit: cover;
`;
