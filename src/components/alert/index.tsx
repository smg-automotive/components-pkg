import React, { FC } from 'react';

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
import { BareAlertProps } from './Bare';

type SharedProps = Omit<BareAlertProps, 'onClose'>;

export type DismissibleProps = SharedProps & {
  onDismiss?: () => void;
  dismissible?: true;
};

export type NonDismissibleProps = SharedProps & {
  onDismiss?: never;
  dismissible?: false;
};

export type AlertProps = DismissibleProps | NonDismissibleProps;

const Alert: FC<AlertProps> = ({
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
          link.as === 'button' ? (
            <Link as="button" onClick={() => link.onClick?.()} textAlign="left">
              {link.text}
            </Link>
          ) : (
            <Link href={link.url} isExternal={link.isExternal}>
              {link.text}
            </Link>
          )
        ) : null}
      </Flex>
      {rest.dismissible ? (
        <CloseButton
          alignSelf="flex-start"
          position="relative"
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
