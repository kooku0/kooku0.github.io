import { css } from '@emotion/react';
import styled from '@emotion/styled';

import {
  alignCenter,
  backgroundBlue300,
  backgroundGrey20,
  backgroundWhite,
  borderSolidGrey30,
  flex,
  justifyCenter,
  textBlue300,
  textGrey40,
  textWhite
} from '@/styles/css';

const defaultButtonStyle = css`
  ${textWhite}
  ${backgroundBlue300}
  margin-top: 16px;
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  border-radius: 2px;
  border: none;

  &:disabled {
    ${textGrey40}
    ${backgroundGrey20}
  }
`;

export const Button = styled.button`
  ${flex}
  ${alignCenter}
  ${justifyCenter}
  ${defaultButtonStyle}
`;
Button.defaultProps = { type: 'button' };

export const WhiteButton = styled(Button)`
  ${textBlue300}
  ${backgroundWhite}
  ${borderSolidGrey30}
`;

export const Submit = styled(Button)`
  ${defaultButtonStyle}
`;
Submit.defaultProps = { type: 'submit' };

export const TextButton = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
`;
