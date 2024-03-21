import Hide from './index';

const Template = ({ text, ...args }) => {
  const breakpoint = args.below || args.above || '[please pass a breakpoint]';
  return <Hide {...args}>{text.replace('BREAKPOINT', breakpoint)}</Hide>;
};

export default {
  title: 'Components/Utils/Hide',
  component: Hide,

  argTypes: {
    below: {
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'],

      control: {
        type: 'select',
      },
    },

    above: {
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'],

      control: {
        type: 'select',
      },
    },

    text: {
      table: {
        disable: true,
      },
    },
  },
};

export const HideAboveAViewport = {
  render: Template.bind({}),
  name: 'Hide above a viewport',

  args: {
    above: undefined,
    text: 'I am hidden on BREAKPOINT and above and shown otherwise',
  },

  argTypes: {
    below: {
      table: {
        disable: true,
      },
    },
  },
};

export const HideBelowAViewport = {
  render: Template.bind({}),
  name: 'Hide below a viewport',

  args: {
    below: undefined,
    text: 'I am hidden on BREAKPOINT and below and shown otherwise',
  },

  argTypes: {
    above: {
      table: {
        disable: true,
      },
    },
  },
};

export const HideWhenMatchingAQuery = {
  render: Template.bind({}),
  name: 'Hide when matching a query',

  args: {
    breakpoint:
      '(orientation: landscape) and (hover: none) and (pointer: coarse)',
    text: 'I am hidden on mobile landscape',
  },

  argTypes: {
    above: {
      table: {
        disable: true,
      },
    },

    below: {
      table: {
        disable: true,
      },
    },
  },
};
