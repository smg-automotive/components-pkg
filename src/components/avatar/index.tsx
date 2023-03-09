import React, { FC } from 'react';
import { useMultiStyleConfig } from '@chakra-ui/react';

import { AvatarIcon, AvatarWithNotificationIcon } from '../icons';

type Props = {
  withNotification?: boolean;
};

const Avatar: FC<Props> = ({ withNotification }) => {
  const baseStyle = useMultiStyleConfig('Avatar');
  return withNotification ? (
    <AvatarWithNotificationIcon
      __css={baseStyle}
      data-testid="notification-icon"
    />
  ) : (
    <AvatarIcon __css={baseStyle} />
  );
};

export default Avatar;
