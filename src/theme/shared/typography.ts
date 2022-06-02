/* eslint-disable @typescript-eslint/naming-convention */
import lineHeights from './lineHeights';
import fontWeights from './fontWeights';
import fontSizes from './fontSizes';
import fonts from './fonts';

const typography = {
  display1: {
    fontFamily: fonts.openSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes['5xl'],
  },
  display2: {
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes['4xl'],
  },
  display3: {
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes['3xl'],
  },
  display4: {
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes['2xl'],
  },
  heading1: {
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes.xl,
  },
  heading2: {
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes.lg,
  },
  heading3: {
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes.md,
  },
  heading4: {
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes.base,
  },
  heading5: {
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes.sm,
  },
  heading6: {
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes.xs,
  },
  'body-large': {
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.body,
    fontSize: fontSizes.md,
  },
  body: {
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.body,
    fontSize: fontSizes.base,
  },
  'body-small': {
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.body,
    fontSize: fontSizes.sm,
  },
  'body-xs': {
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.body,
    fontSize: fontSizes.xs,
  },
};

export default typography;
