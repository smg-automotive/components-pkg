import { Meta, StoryObj } from '@storybook/react';

import { Text } from './index';

import { getSharedConfig } from 'src/themes/shared';

const sharedConfig = getSharedConfig();

const meta: Meta<typeof Text> = {
  title: 'Components/Utils/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel lectus tellus. In auctor libero convallis metus mattis mattis. In quis nisl lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel odio faucibus, gravida velit sit amet, porta mauris. Vivamus in arcu nec erat pellentesque eleifend vel non ex. Nam laoreet ligula volutpat tempor egestas. Sed sollicitudin vulputate erat. Quisque in egestas magna. Fusce imperdiet rutrum orci sit amet congue. Sed vestibulum odio placerat, egestas metus quis, consequat mi. In tempus, odio at venenatis gravida, massa dolor congue dui, sed ornare justo leo vitae justo. Pellentesque nec tincidunt lacus.',
    color: 'gray.900',
  },

  argTypes: {
    textStyle: {
      options: Object.keys(sharedConfig.theme.textStyles),

      control: {
        type: 'select',
      },
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof Text> = {};
