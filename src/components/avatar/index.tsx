import React, { FC } from 'react';

import { BoxProps, useRecipe } from '@chakra-ui/react';

import { avatarRecipe } from 'src/themes/shared/recipes/avatar';

import { AvatarIcon, AvatarWithNotificationIcon } from '../icons';

export type AvatarProps = {
  withNotification?: boolean;
  color?: BoxProps['color'];
};

export const Avatar: FC<AvatarProps> = ({ withNotification, color }) => {
  const recipe = useRecipe({ recipe: avatarRecipe});
  const styles = recipe();

  return withNotification ? (
    <AvatarWithNotificationIcon
      css={styles}
      data-testid="notification-icon"
      {...(color && { color })}
    />
  ) : (
    <AvatarIcon css={styles} {...(color && { color })} />
  );
};
