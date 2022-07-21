import { ComponentStyleConfig, SystemStyleObject } from '@chakra-ui/react';

const baseStyleSection: SystemStyleObject = {
  color: 'gray.900',
};

const Section: ComponentStyleConfig = {
  parts: ['section', 'titleHero', 'textHero', 'titleRegular', 'textRegular'],
  baseStyle: {
    section: baseStyleSection,
    titleHero: {
      textStyle: 'heading1',
    },
    textHero: {
      textStyle: 'body-large',
    },
    titleRegular: {
      textStyle: 'heading2',
    },
    textRegular: {
      textStyle: 'body',
    },
  },
};

export default Section;
