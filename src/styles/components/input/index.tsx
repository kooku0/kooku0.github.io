import styled from '@emotion/styled';

import {
  backgroundGrey20,
  backgroundWhite,
  borderSolidBlue300,
  borderSolidGrey30,
  outlineRed,
  textBlack,
  textGrey40,
  textGrey200
} from '@/styles/css';

export interface InputStyledProps {
  error?: boolean;
}

export const Input = styled.input<InputStyledProps>`
  ${borderSolidGrey30}
  margin-top: 8px;
  width: 100%;
  height: 48px;
  flex-grow: 0;
  border-radius: 2px;
  background-color: white;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.4px;
  padding: 0 16px;

  &:focus {
    ${borderSolidBlue300}
  }

  &:disabled,
  &:read-only {
    ${textGrey40}
    ${backgroundGrey20}
  }
  &::placeholder {
    ${textGrey200}
  }

  ${({ error }) => (error ? outlineRed : null)}
`;

export const Select = styled.select<InputStyledProps>`
  font-size: 1.1em;
  padding: 8px;

  ${({ error }) => (error ? outlineRed : null)}
`;

export const Option = styled.option`
  ${textBlack}
  ${backgroundWhite}

  &:disabled {
    ${textGrey200}
    ${backgroundGrey20}
  }
`;
