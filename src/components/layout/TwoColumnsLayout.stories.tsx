import React, { FC } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Text from '../text';
import SimpleHeader from '../simpleHeader';
import Section from '../section';
import TwoColumnsLayout, { TwoColumnsLayoutProps } from './TwoColumnsLayout';

type TemplateProps = Omit<TwoColumnsLayoutProps, 'left' | 'right'> & {
  leftContent: TwoColumnsLayoutProps['left']['content'];
  leftContentColumns: TwoColumnsLayoutProps['left']['columns'];
  rightContent: TwoColumnsLayoutProps['right']['content'];
  rightContentColumns: TwoColumnsLayoutProps['right']['columns'];
};

const meta: Meta<FC<TemplateProps>> = {
  title: 'Layout/Pages/Layout with two columns',
  render: ({
    rightContent,
    leftContent,
    rightContentColumns,
    leftContentColumns,
    ...args
  }: TemplateProps) => (
    <TwoColumnsLayout
      {...args}
      right={{ content: rightContent, columns: rightContentColumns }}
      left={{ content: leftContent, columns: leftContentColumns }}
    />
  ),

  args: {
    header: <SimpleHeader title="I am a simple header!" url="#" />,

    leftContent: (
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel lectus tellus. In auctor libero convallis metus mattis mattis. In
        quis nisl lorem. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </Text>
    ),

    leftContentColumns: 6,
    rightContent: (
      <img src="https://picsum.photos/400/300" alt="vehicle reference image" />
    ),
    rightContentColumns: 6,

    title: '',
  },

  argTypes: {
    header: {
      table: {
        disable: true,
      },
    },

    leftContent: {
      table: {
        disable: true,
      },
    },

    leftContentColumns: {
      control: {
        type: 'number',
        min: 1,
        max: 11,
        step: 1,
      },
    },

    rightContent: {
      table: {
        disable: true,
      },
    },

    rightContentColumns: {
      control: {
        type: 'number',
        min: 1,
        max: 11,
        step: 1,
      },
    },

    title: {
      control: {
        type: 'text',
      },
    },

    backLink: {
      table: {
        disable: true,
      },
    },
  },

  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type StoryType = StoryObj<FC<TemplateProps>>;
export const WithRightContent: StoryType = {
  name: 'With right content',

  args: {
    rightContent: (
      <img src="https://picsum.photos/400/300" alt="vehicle reference image" />
    ),
  },
};

export const WithCustomTitle: StoryType = {
  name: 'With custom title',

  args: {
    title: (
      <Section
        title="This is a custom title element"
        text="And some text that still belongs to the custom element"
      />
    ),
  },

  argTypes: {
    title: {
      table: {
        disable: true,
      },
    },
  },
};

export const WithCustomColumnWidths: StoryType = {
  name: 'With custom column widths',

  args: {
    rightContentColumns: 4,
    leftContentColumns: 8,
  },
};
