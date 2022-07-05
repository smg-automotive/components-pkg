import { SystemStyleObject } from '@chakra-ui/theme-tools';
import { ComponentStyleConfig } from '@chakra-ui/theme';

import { shared } from '../shared';

const { typography } = shared;

const baseStyle: SystemStyleObject = {
  icon: {
    color: 'gray.900',
    padding: 'xs',
  },
  control: {
    width: 'xs',
    height: 'xs',
    border: '1px',
    borderRadius: 'sm',
    borderColor: 'gray.400',
    _hover: {
      borderColor: 'gray.900',
    },
    _checked: {
      borderColor: 'gray.900',
    },
    _disabled: {
      borderColor: 'gray.400',
      cursor: 'not-allowed',
    },
  },
  label: {
    ...typography.body,
    color: 'gray.900',
    _disabled: {
      color: 'gray.400',
      cursor: 'not-allowed',
    },
  },
};

const Checkbox: ComponentStyleConfig = {
  baseStyle,
};

export default Checkbox;
