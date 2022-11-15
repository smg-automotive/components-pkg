import React, { FC, PropsWithChildren } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

export const enum PaginationButtonVariant {
  default = 'default',
  active = 'active',
}

interface Props {
  isDisabled?: boolean;
  variant?: PaginationButtonVariant;
  onClick: (e: unknown) => void;
}

const PaginationButton: FC<PropsWithChildren<Props>> = (props) => {
  const { children, isDisabled, variant, ...rest } = props;
  const { paginationButton } = useMultiStyleConfig('Pagination', {
    variant: variant ? variant : PaginationButtonVariant.default,
  });
  return (
    <chakra.button disabled={isDisabled} __css={paginationButton} {...rest}>
      {children}
    </chakra.button>
  );
};

export default PaginationButton;
