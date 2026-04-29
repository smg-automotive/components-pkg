import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Flex, Spacer } from '@chakra-ui/react';

import { RadioList } from './RadioList';

const DummyOption = () => (
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

const buildOptions = () => [
  <DummyOption key="one" />,
  <DummyOption key="two" />,
  <DummyOption key="three" />,
];

const meta = {
  title: 'Components/Forms/RadioList',
  component: RadioList,
  args: {
    name: 'radio-list',
    onChange: action('onChange'),
  },
  argTypes: {
    options: { control: { disable: true } },
  },
} satisfies Meta<typeof RadioList>;

export default meta;
type StoryType = StoryObj<typeof RadioList>;

export const Overview: StoryType = {
  render: (args) => <RadioList {...args} options={buildOptions()} />,
};

export const WithDefaultValue: StoryType = {
  name: 'With default value',
  args: {
    name: 'radio-list-with-value',
    defaultValue: 'two',
  },
  render: (args) => <RadioList {...args} options={buildOptions()} />,
};
