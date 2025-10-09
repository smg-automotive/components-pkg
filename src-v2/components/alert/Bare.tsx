import React, { ElementType, FC, ReactNode } from 'react';
import {
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Alert as ChakraAlert,
  CloseButton,
  Flex,
} from '@chakra-ui/react';

import Link from '../link';

export interface BareAlertProps {
  title?: string;
  description: ReactNode;
  link?: {
    as?: 'link' | 'button' | ElementType;
    text: string;
    url?: string;
    isExternal?: boolean;
    onClick?: () => void;
  };
  type?: 'error' | 'warning' | 'info' | 'success';
  icon?: ReactNode;
  onClose?: () => void;
}

const BareAlert: FC<BareAlertProps> = ({
  title,
  description,
  link,
  type,
  icon,
  onClose,
}) => {
  return (
    <ChakraAlert status={type}>
      <AlertIcon>{icon}</AlertIcon>
      <Flex direction="column" w="100%">
        {title ? <AlertTitle>{title}</AlertTitle> : null}
        <AlertDescription>{description}</AlertDescription>
        {link ? (
          <Link
            as={link.as === 'link' ? 'a' : link.as}
            href={link.url}
            isExternal={link.isExternal}
            onClick={link.onClick}
          >
            {link.text}
          </Link>
        ) : null}
      </Flex>
      {onClose ? (
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          onClick={onClose}
        />
      ) : null}
    </ChakraAlert>
  );
};

export default BareAlert;
