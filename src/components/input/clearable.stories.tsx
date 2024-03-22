import { parameters } from './StorybookShared';
import meta from './index.stories';

export default {
  ...meta,
  title: 'Components/Forms/Input/Clearable',
  parameters,
};

export const Uncontrolled = {
  args: {
    isClearable: true,
    value: undefined,
  },
};

export const Controlled = {
  args: {
    isClearable: true,
    value: '',
  },
};
