import { Meta } from '@storybook/react';

import { args, argTypes, decorators, render } from './StorybookShared';

import InputComponent from './index';

const meta: Meta<typeof InputComponent> = {
  title: 'Components/Forms/Input',
  component: InputComponent,

  args,
  argTypes,
  decorators,
  parameters: {
    docs: {
      controls: {
        sort: 'alpha',
      },
    },
  },
  render,
};

export const Input = {};

export default meta;
