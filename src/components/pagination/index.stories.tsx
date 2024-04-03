import React from 'react';
import { Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import PaginationComponent, { Props } from './index';

const Template = (props: Props) => {
  const [args, updateArgs] = useArgs<Props>();
  return (
    <PaginationComponent
      {...props}
      {...args}
      onChange={(page) => {
        updateArgs({ currentPage: page });
        action('onChange')(page);
      }}
    />
  );
};

const meta: Meta<typeof PaginationComponent> = {
  title: 'Patterns/Navigation/Pagination',
  component: PaginationComponent,
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

export const Pagination = {};
