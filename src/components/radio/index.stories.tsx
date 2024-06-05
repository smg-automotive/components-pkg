import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import RadioComponent, { Props } from './index';

const Template = (props: Props) => {
  const [args, updateArgs] = useArgs<Props>();

  return (
    <RadioComponent
      {...props}
      {...args}
      isChecked={args.isChecked}
      onChange={(e) => {
        updateArgs({ isChecked: e.target.checked });
        action('onChange')(e);
      }}
    />
  );
};

const meta: Meta<typeof RadioComponent> = {
  title: 'Components/Forms/Radio',
  component: RadioComponent,
  render: Template.bind({}),

  args: {
    isDisabled: false,
    isInvalid: false,
    size: 'md',
    label: 'Radio',
    value: 'option',
    name: 'test-radio',
    variant: 'fontRegular',
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
};
export default meta;

type StoryType = StoryObj<typeof RadioComponent>;

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
    isDisabled: false,
    isInvalid: false,
  },

  argTypes: {
    isDisabled: {
      table: {
        disable: true,
      },
    },

    isInvalid: {
      table: {
        disable: true,
      },
    },
  },
};

export const StateDisabled: StoryType = {
  name: 'States > Disabled',

  args: {
    isDisabled: true,
    isInvalid: false,
    name: 'test-radio-disabled',
  },

  argTypes: {
    isDisabled: {
      table: {
        disable: true,
      },
    },

    isInvalid: {
      table: {
        disable: true,
      },
    },
  },
};

export const StateInvalid: StoryType = {
  name: 'States > Invalid',

  args: {
    isDisabled: false,
    isInvalid: true,
    name: 'test-radio-invalid',
  },

  argTypes: {
    isDisabled: {
      table: {
        disable: true,
      },
    },

    isInvalid: {
      table: {
        disable: true,
      },
    },
  },
};
