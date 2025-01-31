import React, { FC } from 'react';

import { BoxProps } from '@chakra-ui/react';

import { AvatarIcon, AvatarWithNotificationIcon } from '../icons';

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
