import { css } from '@emotion/react';

// prettier-ignore
const spacing = {
  // magin
  margin: (gap: number) =>  css`margin: ${gap}px`,
  marginX: (gap: number) =>  css`margin-left: ${gap}px; margin-right: ${gap}px`,
  marginY: (gap: number) =>  css`margin-top: ${gap}px; margin-bottom: ${gap}px`,
  marginL: (gap: number) =>  css`margin-left: ${gap}px`,
  marginR: (gap: number) => css`margin-right: ${gap}px`,
  marginT: (gap: number) =>  css`margin-top: ${gap}px`,
  marginB: (gap: number) =>  css`margin-bottom: ${gap}px`,

  // padding
  padding: (gap: number) =>  css`padding: ${gap}px`,
  paddingX: (gap: number) =>  css`padding-left: ${gap}px; padding-right: ${gap}px`,
  paddingY: (gap: number) =>  css`padding-top: ${gap}px; padding-bottom: ${gap}px`,
  paddingL: (gap: number) =>  css`padding-left: ${gap}px`,
  paddingR: (gap: number) => css`padding-right: ${gap}px`,
  paddingT: (gap: number) =>  css`padding-top: ${gap}px`,
  paddingB: (gap: number) =>  css`padding-bottom: ${gap}px`,
};

export default spacing;
