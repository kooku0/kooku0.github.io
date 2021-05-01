import { css } from '@emotion/react';

export const flex = css`
  display: flex;
`;

export const flexColumn = css`
  ${flex}
  flex-direction: column;
`;

export const alignCenter = css`
  align-items: center;
`;

export const alignBaseLine = css`
  align-items: baseline;
`;

export const justifyCenter = css`
  justify-content: center;
`;

export const justifySpaceBetween = css`
  justify-content: space-between;
`;
