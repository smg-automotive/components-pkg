import React, { FC } from 'react';
import { Badge as ChakraBadge } from '@chakra-ui/react';

export interface BadgeProps {
  text: string;
  variant?: string;
}
const Badge: FC<BadgeProps> = ({ text, variant }) => {
  return <ChakraBadge variant={variant}>{text}</ChakraBadge>;
};

export default Badge;
