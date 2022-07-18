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
      ...shared.textStyles.heading5,
    },
    td: {
      px: 'xs',
      py: 'xs',
      ...shared.textStyles.body,
    },
    caption: {
      px: 'xs',
      py: 'xs',
      ...shared.textStyles.body,
    },
  },
};

delete CustomTable.baseStyle.th?.fontFamily;
delete CustomTable.baseStyle.caption?.fontFamily;

export default CustomTable;
