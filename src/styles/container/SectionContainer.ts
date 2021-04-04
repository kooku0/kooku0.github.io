import { css } from '@emotion/react';

import theme from '@/styles/theme';

const SectionContainer = css`
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
  }
`;

export default SectionContainer;
