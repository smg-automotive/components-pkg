import Center from 'src/components/center';
import Box from 'src/components/box';

import AppLayoutHeader from './Header';
import AppLayoutFooter from './Footer';
import AppLayoutContent from './Content';
import AppLayout from './AppLayout';

const Template = () => {
  return (
    <AppLayout>
      <AppLayoutHeader>
        <Box
          height="70px"
          width="full"
          padding="2xl"
          fontWeight="bold"
          backgroundColor="deeppink"
        >
          <Center>Dummy Header</Center>
        </Box>
      </AppLayoutHeader>
      <AppLayoutContent>
        <Box
          height="70px"
          width="full"
          padding="2xl"
          fontWeight="bold"
          minHeight="full"
          backgroundColor="lightgrey"
        >
          <Center>Dummy Content</Center>
        </Box>
      </AppLayoutContent>
      <AppLayoutFooter>
        <Box
          height="70px"
          width="full"
          padding="2xl"
          fontWeight="bold"
          backgroundColor="purple"
        >
          <Center>Dummy Footer</Center>
        </Box>
      </AppLayoutFooter>
    </AppLayout>
  );
};

export default {
  title: 'Layout/App',
  component: AppLayout,
  args: {},
  argTypes: {},

  parameters: {
    layout: 'fullscreen',
  },
};

export const App = {
  render: Template.bind(),
  name: 'App',
};
