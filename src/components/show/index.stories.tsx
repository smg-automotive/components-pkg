import Show from './index.tsx';

const Template = ({ text, ...args }) => {
  const breakpoint = args.below || args.above || '[please pass a breakpoint]';
  return <Show {...args}>{text.replace('BREAKPOINT', breakpoint)}</Show>;
};

export default {
  title: 'Components/Utils/Show',
  component: Show,

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

export const ShowAboveAViewport = {
  render: Template.bind({}),
  name: 'Show above a viewport',

  args: {
    above: undefined,
    text: 'I am visible on BREAKPOINT and above and hidden otherwise',
  },

  argTypes: {
    below: {
      table: {
        disable: true,
      },
    },
  },
};

export const ShowBelowAViewport = {
  render: Template.bind({}),
  name: 'Show below a viewport',

  args: {
    below: undefined,
    text: 'I am visible on BREAKPOINT and below and hidden otherwise',
  },

  argTypes: {
    above: {
      table: {
        disable: true,
      },
    },
  },
};

export const ShowWhenMatchingAQuery = {
  render: Template.bind({}),
  name: 'Show when matching a query',

  args: {
    breakpoint:
      '(orientation: landscape) and (hover: none) and (pointer: coarse)',
    text: 'I am only shown on mobile landscape',
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
