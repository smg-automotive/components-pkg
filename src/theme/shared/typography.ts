/* eslint-disable @typescript-eslint/naming-convention */
import fonts from './fonts';

const { family, weight, lineHeight, size } = fonts;

const typography = {
  display1: {
    fontFamily: family.makeItSans,
    fontWeight: weight.bold,
    lineHeight: lineHeight.display,
    fontSize: size['5xl'],
  },
  display2: {
    fontFamily: family.makeItSans,
    fontWeight: weight.bold,
    lineHeight: lineHeight.display,
    fontSize: size['4xl'],
  },
  display3: {
    fontFamily: family.makeItSans,
    fontWeight: weight.bold,
    lineHeight: lineHeight.display,
    fontSize: size['3xl'],
  },
  display4: {
    fontFamily: family.makeItSans,
    fontWeight: weight.bold,
    lineHeight: lineHeight.display,
    fontSize: size['2xl'],
  },
  heading1: {
    fontFamily: family.makeItSans,
    fontWeight: weight.bold,
    lineHeight: lineHeight.display,
    fontSize: size.xl,
  },
  heading2: {
    fontFamily: family.makeItSans,
    fontWeight: weight.bold,
    lineHeight: lineHeight.display,
    fontSize: size.lg,
  },
  heading3: {
    fontFamily: family.makeItSans,
    fontWeight: weight.bold,
    lineHeight: lineHeight.display,
    fontSize: size.md,
  },
  heading4: {
    fontFamily: family.makeItSans,
    fontWeight: weight.bold,
    lineHeight: lineHeight.display,
    fontSize: size.base,
  },
  heading5: {
    fontFamily: family.makeItSans,
    fontWeight: weight.bold,
    lineHeight: lineHeight.display,
    fontSize: size.sm,
  },
  heading6: {
    fontFamily: family.makeItSans,
    fontWeight: weight.bold,
    lineHeight: lineHeight.display,
    fontSize: size.xs,
  },
  'body-large': {
    fontFamily: family.makeItSans,
    fontWeight: weight.regular,
    lineHeight: lineHeight.body,
    fontSize: size.md,
  },
  body: {
    fontFamily: family.makeItSans,
    fontWeight: weight.regular,
    lineHeight: lineHeight.body,
    fontSize: size.base,
  },
  'body-small': {
    fontFamily: family.makeItSans,
    fontWeight: weight.regular,
    lineHeight: lineHeight.body,
    fontSize: size.sm,
  },
  'body-xs': {
    fontFamily: family.makeItSans,
    fontWeight: weight.regular,
    lineHeight: lineHeight.body,
    fontSize: size.xs,
  },
};

export default typography;
