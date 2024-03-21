import { useToast } from 'src/hooks';

import { Button, ErrorIcon } from '../index';

const Template = (args) => {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          type: args.type,
          title: 'Your browser is outdated!',
          description: 'Your Chakra experience may be degraded.',
          icon: <ErrorIcon />,
        })
      }
    >
      Show Toast
    </Button>
  );
};

export default {
  title: 'Components/Feedback/Toast',
  component: useToast,
};

export const Toast = {
  render: Template.bind({}),
  name: 'Toast',

  args: {
    type: 'error',
  },

  argTypes: {
    type: {
      options: ['error', 'warning', 'info', 'success'],
      control: 'select',
    },
  },
};
