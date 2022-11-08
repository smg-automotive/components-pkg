import React, { FC, PropsWithChildren } from 'react';
import { chakra } from '@chakra-ui/react';

interface Props {
  isDisabled?: boolean;
  isSelected?: boolean;
  onClick: () => void;
}

const PaginationButton: FC<PropsWithChildren<Props>> = (props) => {
  const { children, ...rest } = props;
  return (
    <chakra.button {...rest}>{children}</chakra.button>
  );
}

export default PaginationButton;
