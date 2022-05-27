/* eslint-disable @typescript-eslint/naming-convention */
import lineHeights from './lineHeights';
import fontWeights from './fontWeights';
import fontSizes from './fontSizes';
import fonts from './fontFamily';

const typography = {
  display1: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes['5xl'],
  },
  display2: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes['4xl'],
  },
  display3: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes['3xl'],
  },
  display4: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes['2xl'],
  },
  heading1: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes.xl,
  },
  heading2: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes.lg,
  },
  heading3: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes.md,
  },
  heading4: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes.base,
  },
  heading5: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes.sm,
  },
  heading6: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    fontSize: fontSizes.xs,
  },
  'body-large': {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.body,
    fontSize: fontSizes.md,
  },
  body: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.body,
    fontSize: fontSizes.base,
  },
  'body-small': {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.body,
    fontSize: fontSizes.sm,
  },
  'body-xs': {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.body,
    fontSize: fontSizes.xs,
  },
};

export default typography;
