import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Spacer } from '@chakra-ui/react';

import { Flex } from '../index';
import RadioListComponent from './RadioList';

const DummyOption = () => {
  return (
    <Flex>
      <div>
        <div>A5 Coupé 2.0 40 TDO Sport qu. S-Tronic</div>
        <div>2018 - 2020</div>
      </div>
      <Spacer />
      <div>140 (190)</div>
      <Spacer />
      <div>Automatic</div>
      <Spacer />
      <div>Diesel</div>
      <Spacer />
      <div>3</div>
      <Spacer />
      <div>5</div>
    </Flex>
  );
};

const meta: Meta<typeof RadioListComponent> = {
  title: 'Components/Forms/RadioList',
  component: RadioListComponent,

  args: {
    name: 'radio-list',
    onChange: action('onChange'),

    options: [
      <DummyOption key="one" />,
      <DummyOption key="two" />,
      <DummyOption key="three" />,
    ],
  },

  argTypes: {
    options: {
      control: { disable: true },
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof RadioListComponent>;
export const Overview: StoryType = {};

export const WithDefaultValue: StoryType = {
  name: 'With default value',

  args: {
    name: 'radio-list-wit-value',
    defaultValue: 'two',
  },
};
