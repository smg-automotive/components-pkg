import React, { FC, ReactNode } from 'react';

import {
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Alert as ChakraAlert,
  CloseButton,
  Flex,
} from '@chakra-ui/react';

import Link from '../link';

interface Props {
  title?: string;
  description: string;
  link?: {
    text: string;
    url: string;
    isExternal?: boolean;
  };
  type?: 'error' | 'warning' | 'info' | 'success';
  icon: ReactNode;
  onClose?: () => void;
}

const Alert: FC<Props> = ({
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
      <Flex direction="column">
        {title ? <AlertTitle>{title}</AlertTitle> : null}
        <AlertDescription>{description}</AlertDescription>
        {link ? (
          <Link href={link.url} isExternal={link?.isExternal}>
            {link.text}
          </Link>
        ) : null}
      </Flex>
      {onClose ? (
        <CloseButton
          alignSelf="flex-start"
          ml="auto"
          fontSize="xxs"
          onClick={onClose}
        />
      ) : null}
    </ChakraAlert>
  );
};

export default Alert;
