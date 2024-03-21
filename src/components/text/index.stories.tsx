import React from 'react';

import { shared } from 'src/themes';

import HighlightedText from './HighlightedText';

import TextComponent from './index';

const Template = ({ color, shade, text, highlightIndices, ...args }) => {
  return highlightIndices ? (
    <HighlightedText
      {...args}
      text={text}
      highlightIndices={highlightIndices}
    />
  ) : (
    <TextComponent {...args} color={`${color}.${shade}`} />
  );
};

export default {
  title: 'Components/Utils/Text',
  component: TextComponent,

  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel lectus tellus. In auctor libero convallis metus mattis mattis. In quis nisl lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel odio faucibus, gravida velit sit amet, porta mauris. Vivamus in arcu nec erat pellentesque eleifend vel non ex. Nam laoreet ligula volutpat tempor egestas. Sed sollicitudin vulputate erat. Quisque in egestas magna. Fusce imperdiet rutrum orci sit amet congue. Sed vestibulum odio placerat, egestas metus quis, consequat mi. In tempus, odio at venenatis gravida, massa dolor congue dui, sed ornare justo leo vitae justo. Pellentesque nec tincidunt lacus.',
    color: 'gray',
    shade: 900,
  },

  argTypes: {
    color: {
      options: ['blue', 'gray', 'green', 'orange', 'red', 'brand'],

      control: {
        type: 'select',
      },
    },

    shade: {
      options: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],

      control: {
        type: 'select',
      },
    },

    textStyle: {
      options: Object.keys(shared.textStyles),

      control: {
        type: 'select',
      },
    },
  },
};

export const Text = {
  render: Template.bind({}),
  name: 'Text',
};

export const TextWithHighlight = {
  render: Template.bind({}),
  name: 'Text with highlight',

  args: {
    text: 'Mercedes',
    highlightIndices: [
      [1, 3],
      [6, 6],
    ],
  },

  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
