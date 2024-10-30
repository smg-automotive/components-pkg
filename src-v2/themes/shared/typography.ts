import { lineHeights } from './lineHeights';
import { fontWeights } from './fontWeights';
import { fontSizes } from './fontSizes';
import { fonts } from './fonts';

export const textStyles = {
  display1: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.xs,
    fontSize: fontSizes['5xl'],
  },
  display2: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.xs,
    fontSize: fontSizes['4xl'],
  },
  display3: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.xs,
    fontSize: fontSizes['3xl'],
  },
  display4: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.xs,
    fontSize: fontSizes['2xl'],
  },
  heading1: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.sm,
    fontSize: fontSizes.xl,
  },
  heading2: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.sm,
    fontSize: fontSizes.lg,
  },
  heading3: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.sm,
    fontSize: fontSizes.md,
  },
  heading4: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.sm,
    fontSize: fontSizes.base,
  },
  heading5: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.sm,
    fontSize: fontSizes.sm,
  },
  heading6: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.sm,
    fontSize: fontSizes.xs,
  },
  'body-large': {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.md,
    fontSize: fontSizes.md,
  },
  body: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.md,
    fontSize: fontSizes.base,
  },
  'body-small': {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.md,
    fontSize: fontSizes.sm,
  },
  'body-xs': {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.md,
    fontSize: fontSizes.xs,
  },
  button: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.sm,
    fontSize: fontSizes.base,
  },
  label: {
    fontFamily: fonts.makeItSans,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.sm,
    fontSize: fontSizes.base,
  },
};
