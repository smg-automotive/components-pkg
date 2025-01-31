import React, { FC } from 'react';

import { BoxProps, useRecipe  } from '@chakra-ui/react';

import { AvatarIcon, AvatarWithNotificationIcon } from '../icons';
import { avatarRecipe } from 'src/themes/shared/recipes/avatar';

export type AvatarProps = {
  withNotification?: boolean;
  color?: BoxProps['color'];
};

export const Avatar: FC<AvatarProps> = ({ withNotification, color }) => {
  return withNotification ? (
    <AvatarWithNotificationIcon
      css={avatarRecipe.base}
      data-testid="notification-icon"
      {...(color && { color })}
    />
  ) : (
    <AvatarIcon css={ avatarRecipe } {...(color && { color })} />
  );
};
