import React, { FC } from 'react';

import { useRecipe } from '@chakra-ui/react';

import { BoxProps } from '../box';

import { avatarRecipe } from 'src/themes/shared/recipes/avatar';

import { AvatarIcon, AvatarWithNotificationIcon } from '../icons';

export type AvatarProps = {
  withNotification?: boolean;
  color?: BoxProps['color'];
};

export const Avatar: FC<AvatarProps> = ({ withNotification, color }) => {
  const recipe = useRecipe({ recipe: avatarRecipe });
  const styles = recipe(recipe);

  return withNotification ? (
    <AvatarWithNotificationIcon
      css={styles.base}
      data-testid="notification-icon"
      {...(color && { color })}
    />
  ) : (
    <AvatarIcon css={avatarRecipe} {...(color && { color })} />
  );
};
