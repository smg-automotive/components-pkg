import React, { FC } from 'react';
import { Badge as ChakraBadge } from '@chakra-ui/react';

export interface BadgeProps {
  text: string;
}
const Badge: FC<BadgeProps> = ({ text }) => {
  return <ChakraBadge>{text}</ChakraBadge>;
};

export default Badge;
