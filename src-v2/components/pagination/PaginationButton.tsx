import React, { FC, MouseEvent, PropsWithChildren } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

interface Props {
  isDisabled?: boolean;
  isActive?: boolean;
  ariaLabel: string;
  onClick: (e: MouseEvent) => void;
}

const PaginationButton: FC<PropsWithChildren<Props>> = (props) => {
  const { children, isDisabled, isActive, ariaLabel, onClick } = props;
  const { paginationButton } = useMultiStyleConfig('Pagination', {
    variant: isActive ? 'active' : 'default',
  });
  return (
    <chakra.button
      __css={paginationButton}
      disabled={isDisabled}
      aria-current={isActive}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </chakra.button>
  );
};

export default PaginationButton;
