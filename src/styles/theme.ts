export const DESKTOP_WIDTh = 1024;
export const MOBILE_WIDTH = 767;
export const IPOHNESE_WIDTH = 340;

const lessThan = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;
const between = (minWidth: number, maxWidth: number) =>
  `@media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
const greaterThan = (minWidth: number) => `@media (min-width: ${minWidth}px)`;

const media = {
  desktop: greaterThan(DESKTOP_WIDTh),
  tablet: between(MOBILE_WIDTH + 1, DESKTOP_WIDTh - 1),
  mobile: lessThan(MOBILE_WIDTH),
  iphoneSE: lessThan(IPOHNESE_WIDTH)
};

const color = {
  white: '#ffffff',
  black: '#000000',
  blue40: '#e8f3ff',
  blue300: '#1d6ff2',
  red400: '#dc2d44',
  grey20: '#f6f7f9',
  grey40: '#c5c7cb',
  grey30: '#e5e8ec',
  grey200: '#8d949f',
  grey300: '#535a65'
};

const theme = {
  color,
  media
};

export default theme;
export { color, media };
