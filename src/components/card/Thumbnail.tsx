import styled from '@emotion/styled';

import theme from '@/styles/theme';

import Image from '../Image';

export default styled(Image)`
  width: 150px;
  height: 128px;
  border-radius: 4px;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.1);

  ${theme.media.mobile} {
    width: 98px;
    height: 82px;
  }
`;
