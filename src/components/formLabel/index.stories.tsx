import React from 'react';
import { Box } from '@chakra-ui/react';

import FormLabelComponent from './index';

const Template = (args) => {
  return (
    <Box w="100%" maxW="250px">
      <FormLabelComponent {...args} />
    </Box>
  );
};

export default {
  title: 'Components/Forms/Form Label',
  component: FormLabelComponent,

  args: {
    children: 'I am label',
    size: 'lg',
  },

  argTypes: {
    size: {
      options: ['sm', 'lg'],
      control: 'select',
    },
  },
};

export const FormLabel = {
  render: Template.bind({}),
  name: 'Form Label',
};
