import { css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '@/styles/theme';

export const BaseMain = styled.main`
  width: 100%;
`;

export const BaseSection = styled.section``;

export const SectionContainer = css`
  ${theme.media.desktop} {
    max-width: 1024px;
    margin: 0 auto;
  }

  ${theme.media.tablet} {
    max-width: 960px;
    margin: 0 32px;
  }

  ${theme.media.mobile} {
    max-width: 100%;
    margin: 0 16px;
  }
`;
