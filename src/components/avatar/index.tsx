import React, { FC } from 'react';
import { useMultiStyleConfig } from '@chakra-ui/react';

import { AvatarIcon, AvatarWithNotificationIcon } from '../icons';

export type Props = {
  withNotification?: boolean;
  color?: string;
};

const Avatar: FC<Props> = ({ withNotification, color }) => {
  const baseStyle = useMultiStyleConfig('Avatar');
  return withNotification ? (
    <AvatarWithNotificationIcon
      __css={baseStyle}
      data-testid="notification-icon"
      {...(color && { color })}
    />
  ) : (
    <AvatarIcon __css={baseStyle} {...(color && { color })} />
  );
};
Avatar.displayName = 'Avatar';

export default Avatar;
