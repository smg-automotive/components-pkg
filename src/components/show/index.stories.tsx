import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Box from '../box';

import Show, { type Props } from './index';

const Template = ({ text, ...args }: Props & { text: string }) => {
  const breakpoint = args.below || args.above || '[please pass a breakpoint]';
  return (
    <Show {...args}>
      <Box border="1px" borderColor="gray.600" p="md" rounded="sm">
        {text.replace('BREAKPOINT', breakpoint)}
      </Box>
    </Show>
  );
};

/**
 * ## Testing
 *
 * If you are using testing-library, you will face some limitations in
 * testing different viewport sizes. It is sometimes not possible to
 * properly query the DOM elements inside the `Show` component because
 * they would be hidden on the Jest viewport (`1024px`) size and
 * testing-library does not allow you to overwrite that behavior.
 * In that case, you should use the `hidden: true` flag as follows:
 *
 * ```tsx
 * import { render, screen, within } from '@testing-library/react';
 *
 * import { Show } from '@smg-automotive/components';
 *
 * it('should show only on desktop devices', () => {
 *   render(
 *     <Show above="sm">
 *       <a href="...">my-link</a>
 *     </Show>,
 *   );
 *   const ctaContainer = screen.getByTestId('show-container');
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
  title: 'Components/Utils/Show',
  component: Show,
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
export const ShowAboveAViewport: StoryType = {
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

export const ShowBelowAViewport: StoryType = {
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

/**
 * Only visible on mobile portrait devices.
 */
export const ShowWhenMatchingAQuery: StoryType = {
  name: 'Show when matching a query',

  args: {
    breakpoint:
      '(orientation: portrait) and (hover: none) and (pointer: coarse)',
    text: 'I am visible on mobile landscape',
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
