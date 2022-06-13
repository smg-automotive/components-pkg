import { theme } from '@chakra-ui/react';

import { shared } from '../shared';

const {
  components: { Table },
} = theme;

const CustomTable = JSON.parse(JSON.stringify(Table));

CustomTable.sizes = {
  md: {
    th: {
      px: 'xs',
      py: 'xs',
      ...shared.typography.heading5,
    },
    td: {
      px: 'xs',
      py: 'xs',
      ...shared.typography.body,
    },
    caption: {
      px: 'xs',
      py: 'xs',
      ...shared.typography.body,
    },
  },
};

delete CustomTable.baseStyle.th?.fontFamily;
delete CustomTable.baseStyle.caption?.fontFamily;

export default CustomTable;
