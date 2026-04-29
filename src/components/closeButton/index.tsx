import React, { FC } from 'react';
import { CloseButton as ChakraCloseButton, useRecipe } from '@chakra-ui/react';

type CloseButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
};

export const CloseButton: FC<CloseButtonProps> = ({
  disabled = false,
  onClick,
}) => {
  const recipe = useRecipe({ key: 'closeButton' });
  const styles = recipe();

  return (
    <ChakraCloseButton css={styles} disabled={disabled} onClick={onClick} />
  );
};
