import { parameters } from './StorybookShared';
import meta from './index.stories';

export default {
  ...meta,
  title: 'Components/Forms/Input/States',
  parameters,
};

export const Default = {
  args: {
    size: 'lg',
    placeholder: 'Placeholder',
    isDisabled: false,
    isInvalid: false,
    autoFocus: false,
  },
};

export const Focused = {
  args: {
    size: 'lg',
    placeholder: 'Placeholder',
    isDisabled: false,
    isInvalid: false,
    autoFocus: true,
  },
};

export const Disabled = {
  args: {
    size: 'lg',
    placeholder: 'Placeholder',
    isDisabled: true,
    isInvalid: false,
    autoFocus: false,
  },
};

export const Invalid = {
  args: {
    size: 'lg',
    placeholder: 'Placeholder',
    isDisabled: false,
    isInvalid: true,
    autoFocus: false,
  },
};
