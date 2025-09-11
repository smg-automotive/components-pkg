import React, { FC } from 'react';
import { CloseButton as ChakraCloseButton, useRecipe } from '@chakra-ui/react';

import { closeButtonRecipe } from 'src/themes/shared/recipes/closeButton';

interface CloseButtonProps {
  disabled?: boolean;
}

export const CloseButton: FC<CloseButtonProps> = ({ disabled = false }) => {
  const recipe = useRecipe({ recipe: closeButtonRecipe });
  const styles = recipe();

  return <ChakraCloseButton css={styles} disabled={disabled} />;
};
