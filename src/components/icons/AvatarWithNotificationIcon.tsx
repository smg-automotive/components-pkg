import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const AvatarWithNotificationIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'AvatarWithNotification',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Avatar with notification icon</title>
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.6094 1.60585C14.4788 1.21329 13.2643 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 10.7357 22.7867 9.52125 22.3941 8.39062C21.8158 8.70665 21.1682 8.91174 20.4798 8.97728C20.8166 9.92203 21 10.9396 21 12C21 14.125 20.2635 16.078 19.0319 17.6177L16.7071 15.2929L16.4142 15H16H8H7.58579L7.29289 15.2929L4.9681 17.6177C3.73647 16.078 3 14.125 3 12C3 7.02944 7.02944 3 12 3C13.0604 3 14.078 3.18339 15.0227 3.52019C15.0883 2.83185 15.2934 2.1842 15.6094 1.60585ZM12 21C9.87499 21 7.92199 20.2635 6.38231 19.0319L8.41421 17H15.5858L17.6177 19.0319C16.078 20.2635 14.125 21 12 21ZM14.5 9.5C14.5 10.8807 13.3807 12 12 12C10.6193 12 9.5 10.8807 9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5ZM16.5 9.5C16.5 11.9853 14.4853 14 12 14C9.51472 14 7.5 11.9853 7.5 9.5C7.5 7.01472 9.51472 5 12 5C14.4853 5 16.5 7.01472 16.5 9.5Z"
        />
        <circle cx="20" cy="4" r="4" fill="#FD351A" />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
