import React from 'react';

import {
  CardBody,
  Card as CardComponent,
  CardFooter,
  CardHeader,
} from './index';

const Template = ({ tileContent, bodyContent, footerContent, maxWidth }) => (
  <CardComponent maxW={`${maxWidth}px`}>
    {tileContent ? <CardHeader>{tileContent}</CardHeader> : null}
    {bodyContent ? <CardBody>{bodyContent}</CardBody> : null}
    {footerContent ? <CardFooter>{footerContent}</CardFooter> : null}
  </CardComponent>
);

export default {
  title: 'Components/Data display/Card',
  component: CardComponent,

  args: {
    tileContent: 'I am title',
    bodyContent: 'I am body',
    footerContent: 'I am footer',
    maxWidth: 400,
  },

  argTypes: {
    maxWidth: {
      control: {
        type: 'number',
        step: 50,
      },
    },
  },
};

export const Card = {
  render: Template.bind({}),
  name: 'Card',
};
