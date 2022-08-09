import { PartsStyleObject, SystemStyleObject } from '@chakra-ui/styled-system';
import { checkboxAnatomy as parts } from '@chakra-ui/anatomy';

const baseStyleControl: SystemStyleObject = {
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
    color: 'gray.400',
  },
  _invalid: {
    borderColor: 'red.500',
  },
};

const baseStyleContainer: SystemStyleObject = {
  _disabled: {
    cursor: 'not-allowed',
  },
};

const baseStyleIcon: SystemStyleObject = {
  padding: 'xs',
};

const baseStyleLabel: SystemStyleObject = {
  textStyle: 'body',
  color: 'gray.900',
  _disabled: {
    color: 'gray.400',
  },
};

const baseStyle: PartsStyleObject<typeof parts> = {
  control: baseStyleControl,
  container: baseStyleContainer,
  icon: baseStyleIcon,
  label: baseStyleLabel,
};

export default {
  baseStyle,
};
