import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import { Pagination, Props } from './index';

const Template = (props: Props) => {
  const [args, updateArgs] = useArgs<Props>();
  return (
    <Pagination
      {...props}
      {...args}
      onChange={(page) => {
        updateArgs({ currentPage: page });
        args.onChange?.(page);
      }}
    />
  );
};

const meta: Meta<typeof Pagination> = {
  title: 'Patterns/Navigation/Pagination',
  component: Pagination,
  render: Template.bind({}),

  decorators: [
    (Story) => {
      const [args] = useArgs();

      return (
        <Box>
          <div>{`Page index for API contract: ${args.currentPage}`}</div>
          <Story />
        </Box>
      );
    },
  ],

  args: {
    totalPages: 10,
    currentPage: 0,
    onChange: action('onChange'),
  },

  argTypes: {
    totalPages: {
      control: {
        type: 'number',
        min: 0,
        step: 1,
      },
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof Pagination> = {};
