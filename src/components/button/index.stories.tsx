import { Stack } from 'src/index.ts';

import { ShareIcon, TrashIcon, VideoIcon } from '../index.ts';
import Button from './index.tsx';

const Template = (args) => <Button {...args}>{args.label}</Button>;
const variants = ['primary', 'secondary', 'success', 'transparent'];

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = {
  render: Template.bind({}),
  name: 'Primary',

  args: {
    isDisabled: false,
    label: 'Primary Button',
    variant: 'primary',
    size: 'lg',
  },

  argTypes: {
    variant: {
      options: variants,
      control: 'select',
    },

    size: {
      options: ['md', 'lg'],
      control: 'select',
    },
  },
};

export const Secondary = {
  render: Template.bind({}),
  name: 'Secondary',

  args: {
    isDisabled: false,
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'lg',
  },

  argTypes: {
    variant: {
      options: variants,
      control: 'select',
    },

    size: {
      options: ['md', 'lg'],
      control: 'select',
    },
  },
};

export const Success = {
  render: Template.bind({}),
  name: 'Success',

  args: {
    isDisabled: false,
    label: 'Success Button',
    variant: 'success',
    size: 'lg',
  },

  argTypes: {
    variant: {
      options: variants,
      control: 'select',
    },

    size: {
      options: ['md', 'lg'],
      control: 'select',
    },
  },
};

export const Transparent = {
  render: Template.bind({}),
  name: 'Transparent',

  args: {
    isDisabled: false,
    variant: 'transparent',
    icon: <TrashIcon />,
    size: 'lg',
  },

  argTypes: {
    variant: {
      options: variants,
      control: 'select',
    },

    size: {
      options: ['md', 'lg'],
      control: 'select',
    },

    disabled: {
      table: {
        disable: true,
      },
    },
  },
};

export const Sizes = {
  render: () => (
    <Stack spacing="lg" direction="row">
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Stack>
  ),

  name: 'Sizes',
};

export const Disabled = {
  render: () => (
    <Stack spacing="lg" direction="row">
      <Button isDisabled={true}>Primary Button</Button>
      <Button variant="secondary" isDisabled={true}>
        Secondary Button
      </Button>
      <Button variant="success" isDisabled={true}>
        Success Button
      </Button>
    </Stack>
  ),

  name: 'Disabled',
};

export const ButtonAsLink = {
  render: Template.bind({}),
  name: 'Button as Link',

  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'lg',
    as: 'a',
    href: 'https://google.com',
    isExternal: true,
  },

  argTypes: {
    variant: {
      options: variants,
      control: 'select',
    },

    size: {
      options: ['md', 'lg'],
      control: 'select',
    },
  },
};

export const ButtonWithLeftIcon = {
  render: Template.bind({}),
  name: 'Button with left icon',

  args: {
    label: 'Button with left icon',
    variant: 'primary',
    size: 'lg',
    leftIcon: <VideoIcon />,
  },

  argTypes: {
    variant: {
      options: variants,
      control: 'select',
    },

    size: {
      options: ['md', 'lg'],
      control: 'select',
    },

    leftIcon: {
      table: {
        disable: true,
      },
    },
  },
};

export const ButtonWithRightIcon = {
  render: Template.bind({}),
  name: 'Button with right icon',

  args: {
    label: 'Button with right icon',
    variant: 'primary',
    size: 'lg',
    rightIcon: <VideoIcon />,
  },

  argTypes: {
    variant: {
      options: variants,
      control: 'select',
    },

    size: {
      options: ['md', 'lg'],
      control: 'select',
    },

    rightIcon: {
      table: {
        disable: true,
      },
    },
  },
};

export const IconButton = {
  render: Template.bind({}),
  name: 'Icon button',

  args: {
    variant: 'primary',
    size: 'lg',
    icon: <ShareIcon />,
    ariaLabel: 'Share to Facebook',
  },

  argTypes: {
    variant: {
      options: variants,
      control: 'select',
    },

    size: {
      options: ['md', 'lg'],
      control: 'select',
    },

    icon: {
      table: {
        disable: true,
      },
    },
  },
};
