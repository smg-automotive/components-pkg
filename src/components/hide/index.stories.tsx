import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Box from '../box';

import Hide, { type Props } from './index';

const Template = ({ text, ...args }: Props & { text: string }) => {
  const breakpoint = args.below || args.above || '[please pass a breakpoint]';
  return (
    <Hide {...args}>
      <Box border="1px" borderColor="gray.600" p="md" rounded="sm">
        {text.replace('BREAKPOINT', breakpoint)}
      </Box>
    </Hide>
  );
};

/**
 * ## Testing
 *
 * If you are using testing-library, you will face some limitations in
 * testing different viewport sizes. It is sometimes not possible to
 * properly query the DOM elements inside the `Hide` component because
 * they would be hidden on the Jest viewport (`1024px`) size and
 * testing-library does not allow you to overwrite that behavior.
 * In that case, you should use the `hidden: true` flag as follows:
 *
 * ```tsx
 * import { render, screen, within } from '@testing-library/react';
 *
 * import { Hide } from '@smg-automotive/components';
 *
 * it('should show only on mobile devices', () => {
 *   render(
 *     <Hide above="sm">
 *       <a href="...">my-link</a>
 *     </Hide>,
 *   );
 *   const ctaContainer = screen.getByTestId('hide-container');
 *   expect(
 *     within(ctaContainer).getByRole('link', {
 *       name: 'my-link',
 *       // this is needed to find it in the DOM
 *       hidden: true,
 *     }),
 *   ).toBeInTheDocument();
 * });
 * ```
 **/
const meta: Meta<typeof Template> = {
  title: 'Components/Utils/Hide',
  component: Hide,
  render: Template.bind({}),

  parameters: {
    layout: 'centered',
  },

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
export default meta;

type StoryType = StoryObj<typeof Template>;
export const HideAboveAViewport: StoryType = {
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

export const HideBelowAViewport: StoryType = {
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

export const HideWhenMatchingAQuery: StoryType = {
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
