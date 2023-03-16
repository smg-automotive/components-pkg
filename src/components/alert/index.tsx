import React, { FC, ReactNode } from 'react';

import {
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Alert as ChakraAlert,
  CloseButton,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';

import Link from '../link';

interface SharedProps {
  title?: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
  type?: 'error' | 'warning' | 'info' | 'success';
  icon?: ReactNode;
}

interface DismissibleProps extends SharedProps {
  onDismiss?: () => void;
  dismissible?: true;
}

interface NonDismissibleProps extends SharedProps {
  onDismiss?: never;
  dismissible?: false;
}

type Props = DismissibleProps | NonDismissibleProps;

const Alert: FC<Props> = ({
  title,
  description,
  link,
  type,
  icon,
  ...rest
}) => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return isOpen || !rest.dismissible ? (
    <ChakraAlert status={type}>
      <AlertIcon>{icon}</AlertIcon>
      <Flex direction="column" w="100%">
        {title ? <AlertTitle>{title}</AlertTitle> : null}
        <AlertDescription>{description}</AlertDescription>
        {link ? (
          <Link href={link.url} isExternal={true}>
            {link.text}
          </Link>
        ) : null}
      </Flex>
      {rest.dismissible ? (
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          size="sm"
          right={-1}
          top={-1}
          onClick={() => {
            onClose();
            rest.onDismiss?.();
          }}
        />
      ) : null}
    </ChakraAlert>
  ) : null;
};

export default Alert;
