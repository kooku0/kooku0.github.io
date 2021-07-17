import styled from '@emotion/styled';
import React, { forwardRef, ImgHTMLAttributes, Ref } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement>;

const CircleImage = forwardRef(function (props: Props, forwardedRef: Ref<HTMLImageElement>) {
  const { ...rest } = props;

  return <StyledImage ref={forwardedRef} {...rest} />;
});

export default CircleImage;

const StyledImage = styled.img`
  border-radius: 100%;
  object-fit: cover;
`;
