import { theme } from '@chakra-ui/react';

const {
  components: { Table },
} = theme;

const CustomTable = JSON.parse(JSON.stringify(Table));

CustomTable.sizes = {
  md: {
    th: {
      px: 'xs',
      py: 'xs',
      textStyle: 'heading5',
    },
    td: {
      px: 'xs',
      py: 'xs',
      textStyle: 'body',
    },
    caption: {
      px: 'xs',
      py: 'xs',
      textStyle: 'body',
    },
  },
};

delete CustomTable.baseStyle.th?.fontFamily;
delete CustomTable.baseStyle.caption?.fontFamily;

export default CustomTable;
