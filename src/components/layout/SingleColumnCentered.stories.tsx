import { Box, Center } from '@chakra-ui/react';

import { FullHeight } from '../index';
import SingleColumnCenteredLayout from './SingleColumnCentered.tsx';

const WithContent = () => (
  <FullHeight>
    <SingleColumnCenteredLayout>
      <Box background="blue.200">
        <Center>1-2-3-4-5</Center>
      </Box>
      <Box background="blue.300" height="600px">
        I am the content
      </Box>
    </SingleColumnCenteredLayout>
  </FullHeight>
);

export default {
  title: 'Layout/Pages/Single Column Centered',
  component: SingleColumnCenteredLayout,

  parameters: {
    layout: 'fullscreen',
  },

  args: {},
  argTypes: {},
};

export const ContentOnly = {
  render: () => (
    <FullHeight>
      <SingleColumnCenteredLayout>
        <Box background="blue.300" height="600px">
          I am the content
        </Box>
      </SingleColumnCenteredLayout>
    </FullHeight>
  ),

  name: 'Content Only',
};

export const ContentAndStepper = {
  render: WithContent.bind({}),
  name: 'Content and Stepper',
};
