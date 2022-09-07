import React, { FC, ReactNode } from 'react';

import {
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Alert as ChackraAlert,
  Flex,
} from '@chakra-ui/react';

import Link from '../link';

interface Props {
  title?: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
  type?: 'error' | 'warning' | 'info' | 'success';
  icon: ReactNode;
}

const Alert: FC<Props> = ({ title, description, link, type, icon }) => {
  return (
    <ChackraAlert status={type}>
      <AlertIcon>{icon}</AlertIcon>
      <Flex direction="column">
        {title ? <AlertTitle>{title}</AlertTitle> : null}
        <AlertDescription>{description}</AlertDescription>
        {link ? <Link href={link.url}>{link.text}</Link> : null}
      </Flex>
    </ChackraAlert>
  );
};

export default Alert;
