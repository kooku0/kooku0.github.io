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
  white: '#fff',
  black: '#000',

  // kasa
  kasaBlue: '#1d6ff2',
  kasaYellow: '#ffde69',
  kasaBlueGrey100: '#4c5870',
  kasaBlueGrey200: '#3d485e',
  // grey
  grey50: '#f8fafd',
  grey70: '#f6f7f9',
  grey100: '#f2f4f6',
  grey200: '#e5e8eb',
  grey300: '#d1d6db',
  grey350: '#c5c7cb',
  grey400: '#b0b8c1',
  grey500: '#8b95a1',
  grey600: '#6b7684',
  grey700: '#4e5968',
  grey800: '#333d4b',
  grey900: '#191f28',
  // greyOpacity
  greyOpacity50: 'rgba(0,23,51,0.02)',
  greyOpacity100: 'rgba(2,32,71,0.05)',
  greyOpacity200: 'rgba(0,27,55,0.1)',
  greyOpacity300: 'rgba(0,29,58,0.18)',
  greyOpacity400: 'rgba(0,29,54,0.31)',
  greyOpacity500: 'rgba(3,24,50,0.46)',
  greyOpacity600: 'rgba(0,19,43,0.58)',
  greyOpacity700: 'rgba(3,18,40,0.7)',
  greyOpacity800: 'rgba(0,12,30,0.8)',
  greyOpacity900: 'rgba(2,9,19,0.91)',
  // blue
  blue50: '#e8f3ff',
  blue200: '#90c2ff',
  blue100: '#c9e2ff',
  blue300: '#64a8ff',
  blue350: '#5394ff',
  blue400: '#4593fc',
  blue450: '#3e80ed',
  blue480: '#3482ff',
  blue500: '#3182f6',
  blue600: '#2272eb',
  blue700: '#1d6ff2',
  blue800: '#1957c2',
  blue850: '#1151b7',
  blue900: '#194aa6',
  // red
  red50: '#ffebee',
  red100: '#ffcdd2',
  red200: '#ef9a9a',
  red300: '#e57373',
  red400: '#ef5350',
  red500: '#f44336',
  red600: '#e53935',
  red700: '#d32f2f',
  red800: '#c62828',
  red900: '#b71c1c',
  // orange
  orange50: '#fff3e0',
  orange100: '#ffe0b2',
  orange200: '#ffcc80',
  orange300: '#ffb74d',
  orange400: '#ffa726',
  orange500: '#ff9800',
  orange600: '#fb8c00',
  orange700: '#f57c00',
  orange800: '#ef6c00',
  orange900: '#e65100',
  // yellow
  yellow50: '#fffde7',
  yellow100: '#fff9c4',
  yellow200: '#fff59d',
  yellow300: '#fff176',
  yellow400: '#ffee58',
  yellow500: '#ffeb3b',
  yellow600: '#fdd835',
  yellow700: '#fbc02d',
  yellow800: '#f9a825',
  yellow900: '#f57f17',
  // purple
  purple50: '#f3e5f5',
  purple100: '#e1bee7',
  purple200: '#ce93d8',
  purple300: '#ba68c8',
  purple400: '#ab47bc',
  purple500: '#9c27b0',
  purple600: '#8e24aa',
  purple700: '#7b1fa2',
  purple800: '#6a1b9a',
  purple900: '#4a148c',
  // teal
  teal50: '#e1f0f2',
  teal100: '#b1dade',
  teal200: '#81c7cc',
  teal300: '#4caeb5',
  teal400: '#269da6',
  teal500: '#008c96',
  teal600: '#00818a',
  teal700: '#007278',
  teal800: '#006369',
  teal900: '#004d4d',
  // green
  green50: '#e5fff4',
  green100: '#abf2d4',
  green200: '#5ae9ad',
  green300: '#1cd98a',
  green400: '#05c072',
  green500: '#00a661',
  green600: '#009959',
  green700: '#008a50',
  green800: '#007544',
  green900: '#005c36',
  // whiteOpacity
  whiteOpacity50: 'rgba(209,209,253,0.05)',
  whiteOpacity100: 'rgba(217,217,255,0.11)',
  whiteOpacity200: 'rgba(222,222,255,0.19)',
  whiteOpacity300: 'rgba(224,224,255,0.27)',
  whiteOpacity400: 'rgba(232,232,253,0.36)',
  whiteOpacity500: 'rgba(242,242,255,0.47)',
  whiteOpacity600: 'rgba(248,248,255,0.6)',
  whiteOpacity700: 'rgba(253,253,255,0.75)',
  whiteOpacity800: 'rgba(253,253,254,0.89)',
  whiteOpacity900: '#fff'
};

const theme = {
  color,
  media
};

export default theme;
