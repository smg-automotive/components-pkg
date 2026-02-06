import React, { FC, PropsWithChildren } from 'react';
import { SystemStyleObject } from '@chakra-ui/react';

import {
  AccordionButton as AccordionButtonComponents,
  AccordionButtonProps,
} from 'src/components/accordion/AccordionButton';

// TODO try to figure out why we need to redeclare these props
type Props = AccordionButtonProps & {
  w?: AccordionButtonProps['w'];
  _hover?: SystemStyleObject;
  _expanded?: SystemStyleObject;
  paddingX?: AccordionButtonProps['paddingX'];
  py?: AccordionButtonProps['py'];
  display?: AccordionButtonProps['display'];
  alignItems?: AccordionButtonProps['alignItems'];
  backgroundColor?: AccordionButtonProps['backgroundColor'];
  color?: AccordionButtonProps['color'];
  onClick?: AccordionButtonProps['onClick'];
  maxW?: AccordionButtonProps['maxW'];
  fontWeight?: AccordionButtonProps['fontWeight'];
  textStyle?: AccordionButtonProps['textStyle'];
};

export const AccordionButton: FC<PropsWithChildren<Props>> = (props) => {
  return <AccordionButtonComponents {...props} />;
};
