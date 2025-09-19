import React, { FC } from 'react';
import { CloseButton as ChakraCloseButton, useRecipe } from '@chakra-ui/react';

interface CloseButtonProps {
  disabled?: boolean;
}

export const CloseButton: FC<CloseButtonProps> = ({ disabled = false }) => {
  const recipe = useRecipe({ key: 'closeButton' });
  const styles = recipe();

  return <ChakraCloseButton css={styles} disabled={disabled} />;
};
