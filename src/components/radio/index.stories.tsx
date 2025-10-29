import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import {Radio, Props} from './index';
import { Box } from '..';

const Template = (props: Props) => {
  const [args, updateArgs] = useArgs<Props>();

  return (
    <Radio
      {...props}
      {...args}
      checked={args.checked}
      onChange={(e) => {
        updateArgs({ checked: e.target.checked });
        action('onChange')(e);
      }}
    />
  );
};

const meta: Meta<typeof Radio> = {
  title: 'Components/Forms/Radio',
  component: Radio,
  render: Template.bind({}),
  // decorators: [
  //   (Story) => (
  //     <Box w="full" maxW="5xl">
  //       <Story />
  //     </Box>
  //   ),
  // ],

  args: {
    checked: false,
    disabled: false,
    invalid: false,
    size: 'md',
    label: 'Radio',
    value: 'option',
    name: 'test-radio',
    variant: 'fontRegular',
    onChange: action('onChange'),
  },

  argTypes: {
    size: {
      options: ['base', 'md'],
      control: 'select',
    },

    variant: {
      options: ['fontRegular', 'fontBold'],
      control: 'select',
    },
  },
} satisfies Meta<typeof Radio>;
export default meta;

type StoryType = StoryObj<typeof Radio>;

export const Default: StoryType = {
  name: 'Radio Input',
};

export const Overview: StoryType = {};

export const SizeBase: StoryType = {
  name: 'Sizes > Base',

  args: {
    size: 'base',
    name: 'test-radio-base',
  },

  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
};

export const SizeMedium: StoryType = {
  name: 'Sizes > Medium',

  args: {
    size: 'md',
    name: 'test-radio-md',
  },

  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
};

export const StateDefault: StoryType = {
  name: 'States > Default',

  args: {
    disabled: false,
    invalid: false,
  },

  argTypes: {
    disabled: {
      table: {
        disable: true,
      },
    },

    invalid: {
      table: {
        disable: true,
      },
    },
  },
};

export const StateDisabled: StoryType = {
  name: 'States > Disabled',

  args: {
    disabled: true,
    invalid: false,
    name: 'test-radio-disabled',
  },

  argTypes: {
    disabled: {
      table: {
        disable: true,
      },
    },

    invalid: {
      table: {
        disable: true,
      },
    },
  },
};

export const StateInvalid: StoryType = {
  name: 'States > Invalid',

  args: {
    disabled: false,
    invalid: true,
    name: 'test-radio-invalid',
  },

  argTypes: {
    disabled: {
      table: {
        disable: true,
      },
    },

    invalid: {
      table: {
        disable: true,
      },
    },
  },
};
