/* eslint-disable @typescript-eslint/naming-convention */
import fonts from './fonts';

const { family, weight, lineHeight, size } = fonts;

const typography = {
  textStyles: {
    display1: {
      fontFamily: family.makeItSans,
      fontWeight: weight.bold,
      lineHeight: lineHeight.display,
      fontSize: size.f03,
    },
  },
};

export default typography;
