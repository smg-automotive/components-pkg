import React, { FC, PropsWithChildren } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

interface Props {
  isDisabled?: boolean;
  isActive?: boolean;
  onClick: (e: unknown) => void;
}

const PaginationButton: FC<PropsWithChildren<Props>> = (props) => {
  const { children, isDisabled, isActive, ...rest } = props;
  const { paginationButton } = useMultiStyleConfig('Pagination', {
    variant: isActive ? 'active' : 'default',
  });
  return (
    <chakra.button
      __css={paginationButton}
      disabled={isDisabled}
      aria-current={isActive}
      {...rest}
    >
      {children}
    </chakra.button>
  );
};

export default PaginationButton;
