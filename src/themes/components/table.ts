import { theme } from '@chakra-ui/react';

import { typography } from '../shared';

const {
  components: { Table },
} = theme;

Table.sizes = {
  md: {
    th: {
      px: 'xs',
      py: 'xs',
      ...typography.heading5,
    },
    td: {
      px: 'xs',
      py: 'xs',
      ...typography.body,
    },
    caption: {
      px: 'xs',
      py: 'xs',
      ...typography.body,
    },
  },
};

delete Table.baseStyle.th?.fontFamily;
delete Table.baseStyle.caption?.fontFamily;

export default Table;
