import React, { FC } from 'react';

import {
  ModalCloseButton as ChakraModalCloseButton,
  CloseButtonProps,
} from '@chakra-ui/react';

const ModalCloseButton: FC<CloseButtonProps> = (props) => {
  const { size = 'lg', top = '.75rem', ...closeButtonProps } = props;

  return <ChakraModalCloseButton size={size} top={top} {...closeButtonProps} />;
};

export default ModalCloseButton;
