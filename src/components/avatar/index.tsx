import React, { FC } from 'react';

import { AvatarIcon, AvatarWithNotificationIcon } from '../icons';

import { BoxProps } from '@chakra-ui/react';

export type AvatarProps = {
  withNotification?: boolean;
  color?: BoxProps['color'];
};

export const Avatar: FC<AvatarProps> = ({ withNotification, color }) => {
  return withNotification ? (
    <AvatarWithNotificationIcon
      data-testid="notification-icon"
      {...(color && { color })}
    />
  ) : (
    <AvatarIcon {...(color && { color })} />
  );
};
