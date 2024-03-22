import { MagnifierIcon } from '../icons';
import { parameters } from './StorybookShared';

import meta from './index.stories';

export default {
  ...meta,
  title: 'Components/Forms/Input/Icon',
  parameters,
};

export const WithIcon = {
  args: {
    icon: MagnifierIcon,
  },
};
