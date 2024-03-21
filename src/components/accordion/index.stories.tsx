import React from 'react';
import type { Meta } from '@storybook/react';

import { CheckmarkIcon, TimeIcon, TooltipIcon } from '../icons';
import AccordionPanel from './AccordionPanel';
import AccordionItem from './AccordionItem';
import AccordionButton from './AccordionButton';

import Accordion, { type AccordionProps } from './index';

const Template = (
  args: AccordionProps & {
    items: { title: string; content: string; leftIcon?: React.ReactNode }[];
  },
) => (
  <Accordion
    allowMultiple={args?.allowMultiple}
    allowToggle={args?.allowToggle}
    variant={args?.variant}
  >
    {args?.items?.map((item, i) => (
      <AccordionItem key={i}>
        <AccordionButton leftIcon={item?.leftIcon}>
          {item.title}
        </AccordionButton>
        <AccordionPanel>{item.content}</AccordionPanel>
      </AccordionItem>
    ))}
  </Accordion>
);

const meta: Meta<typeof Template> = {
  title: 'Patterns/Navigation/Accordion',
  component: Accordion,
  args: {
    allowMultiple: true,
    variant: 'light',
  },
  argTypes: {
    allowMultiple: {
      control: { type: 'boolean' },
    },
    variant: {
      options: ['light', 'dark', 'minimal'],
      control: { type: 'select' },
    },
    items: {
      table: { disable: true },
    },
  },
};

export const Overview = {
  render: Template.bind({}),
  args: {
    items: [
      {
        title: 'Section 1',
        content: 'First section content.',
      },
      {
        title: 'Section 2',
        content: 'Second section content.',
      },
    ],
  },
};

export const WithIcons = {
  render: Template.bind({}),
  name: 'With icons',

  args: {
    items: [
      {
        title: 'Section 1',
        leftIcon: <TooltipIcon color="orange.400" />,
        content: 'First section content.',
      },
      {
        title: 'Section 2',
        leftIcon: <CheckmarkIcon color="green.400" />,
        content: 'Second section content.',
      },
      {
        title: 'Section 3',
        leftIcon: <TimeIcon />,
        content: 'Third section content.',
      },
    ],
  },
};

export default meta;
