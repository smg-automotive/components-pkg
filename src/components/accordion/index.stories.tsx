import React from 'react';

import { CheckmarkIcon, TimeIcon, TooltipIcon } from '../icons';
import AccordionPanel from './AccordionPanel';
import AccordionItem from './AccordionItem';
import AccordionButton from './AccordionButton';

import Accordion from './index';

const Template = (args) => (
  <Accordion
    allowMultiple={args?.allowMultiple}
    allowToggle={args?.allowToggle}
    variant={args?.variant}
  >
    {args?.items.map((item, i) => (
      <AccordionItem key={i}>
        <AccordionButton leftIcon={item?.leftIcon}>
          {item.title}
        </AccordionButton>
        <AccordionPanel>{item.content}</AccordionPanel>
      </AccordionItem>
    ))}
  </Accordion>
);

export default {
  title: 'Patterns/Navigation/Accordion',
  component: Accordion,
};

export const Overview = {
  render: Template.bind({}),
  name: 'Overview',

  args: {
    allowMultiple: true,

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
    allowMultiple: true,

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
        title: 'Opening hours',
        leftIcon: <TimeIcon />,
        content: 'First section content.',
      },
    ],
  },

  argTypes: {
    variant: {
      type: 'select',
      options: ['light', 'dark', 'minimal'],
    },
  },
};
