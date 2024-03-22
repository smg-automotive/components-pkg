import { parameters } from './StorybookShared';
import meta from './index.stories';

export default {
  ...meta,
  title: 'Components/Forms/Input/Sizes',
  parameters,
};

export const Medium = {
  args: {
    size: 'md',
  },
};

export const Large = {
  args: {
    size: 'lg',
  },
};
