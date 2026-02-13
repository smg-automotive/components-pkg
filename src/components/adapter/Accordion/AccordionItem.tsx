import React, { FC, PropsWithChildren } from 'react';
import { SystemStyleObject } from '@chakra-ui/react';

import {
  AccordionItem as AccordionItemComponents,
  AccordionItemProps,
} from 'src/components/accordion/AccordionItem';

type Props = AccordionItemProps & {
  // TODO try to figure out why we need to redeclare these props
  backgroundColor?: AccordionItemProps['backgroundColor'];
  borderColor?: AccordionItemProps['borderColor'];
  borderTop?: AccordionItemProps['borderTop'];
  paddingX?: AccordionItemProps['paddingX'];
  border?: AccordionItemProps['border'];
  borderBottom?: AccordionItemProps['borderBottom'];
  _last?: SystemStyleObject;
};

export const AccordionItem: FC<PropsWithChildren<Props>> = (props) => {
  return <AccordionItemComponents {...props} />;
};
