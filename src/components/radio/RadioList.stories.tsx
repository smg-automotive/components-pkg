import React from 'react';
import { action } from '@storybook/addon-actions';
import { Spacer } from '@chakra-ui/react';

import { Box, Flex } from '../index';
import RadioListComponent from './RadioList';

const Container = ({ children }) => {
  return (
    <Box padding="xl" background="purple">
      {children}
    </Box>
  );
};

const DummyOption = (name) => {
  return (
    <Flex key={name}>
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

const Template = (args) => {
  return (
    <Container>
      <RadioListComponent {...args} />
    </Container>
  );
};

export default {
  title: 'Components/Forms/RadioList',
  component: RadioListComponent,

  parameters: {
    layout: 'fullscreen',
  },
};

export const RadioList = {
  render: Template.bind({}),
  name: 'RadioList',

  args: {
    name: 'Demo',
    onChange: action,

    options: [
      <DummyOption key="one" name="one" />,
      <DummyOption key="two" name="two" />,
      <DummyOption key="three" name="three" />,
    ],
  },

  argTypes: {
    name: 'Demo',
  },
};
