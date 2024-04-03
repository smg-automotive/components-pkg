import React from 'react';
import { Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
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
      options: ['sm', 'base', 'md'],
      control: 'select',
    },

    variant: {
      options: ['fontRegular', 'fontBold'],
      control: 'select',
    },
  },
};
export default meta;

export const RadioButton = {};

export const SizeBase = {
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

export const SizeMedium = {
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

export const SizesSmall = {
  name: 'Sizes > Small',

  args: {
    size: 'sm',
    name: 'test-radio-sm',
  },

  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
};

export const StateDefault = {
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

export const StateDisabled = {
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

export const StateInvalid = {
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
