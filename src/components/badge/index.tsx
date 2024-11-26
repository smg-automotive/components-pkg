import React, { FC } from 'react';
import {
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps,
} from '@chakra-ui/react';

export type BadgeProps = Exclude<ChakraBadgeProps, 'children'> & {
  text: string;
};

export const Badge: FC<BadgeProps> = ({ text, ...props }) => (
  <ChakraBadge {...props}>{text}</ChakraBadge>
);
