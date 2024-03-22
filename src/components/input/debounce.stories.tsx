import { action } from '@storybook/addon-actions';

import { parameters } from './StorybookShared';
import meta from './index.stories';

export default {
  ...meta,
  title: 'Components/Forms/Input/Debounced',
  parameters,
};

/**
 * This is a debounced input, head to the actions tab and see that `setInputValue` is not fired on every key stroke
 */
export const Debounced = {
  args: {
    size: 'lg',
    placeholder: 'Placeholder',
    isDisabled: false,
    isInvalid: false,
    autoFocus: false,
    debounce: true,
    setInputValue: action('setInputValue'),
  },
};
