import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

const baseStyleList: SystemStyleObject = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'xs',
  marginTop: 'sm',
};

const baseStyleListItem: SystemStyleObject = {
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: 'lg',
  color: 'gray.600',
};

const baseStyleItemElement: SystemStyleObject = {
  textStyle: 'body',
  flex: 1,
};

const GroupLabel: ComponentMultiStyleConfig = {
  parts: ['list', 'listItem', 'itemLabel', 'itemValue'],
  baseStyle: {
    list: baseStyleList,
    listItem: baseStyleListItem,
    listItemElement: baseStyleItemElement,
  },
};

export default GroupLabel;
