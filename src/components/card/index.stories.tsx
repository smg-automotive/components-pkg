import React from 'react';
import { Meta } from '@storybook/react';

import {
  CardBody,
  Card as CardComponent,
  CardFooter,
  CardHeader,
} from './index';

const Template = ({
  titleContent,
  bodyContent,
  footerContent,
  maxWidth,
}: {
  maxWidth: number;
  titleContent?: string;
  bodyContent?: string;
  footerContent?: string;
}) => (
  <CardComponent maxW={`${maxWidth}px`}>
    {titleContent ? <CardHeader>{titleContent}</CardHeader> : null}
    {bodyContent ? <CardBody>{bodyContent}</CardBody> : null}
    {footerContent ? <CardFooter>{footerContent}</CardFooter> : null}
  </CardComponent>
);

const meta: Meta<typeof CardComponent> = {
  title: 'Components/Data display/Card',
  component: CardComponent,

  args: {
    titleContent: 'I am title',
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
};

export default meta;
