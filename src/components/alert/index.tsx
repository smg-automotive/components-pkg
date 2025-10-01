import React, { FC } from 'react';
import {
  Box,
  Alert as ChakraAlert,
  useDisclosure,
  useSlotRecipe,
} from '@chakra-ui/react';

import { CloseButton } from '../closeButton';
import { AlertLink } from './Link';

export interface SharedProps extends ChakraAlert.RootProps {
  description: string;
  title?: string;
  link?: {
    as?: 'link' | 'button' | React.ElementType;
    text: string;
    url?: string;
    isExternal?: boolean;
    onClick?: () => void;
  };
  icon?: React.ReactNode;
  type?: 'error' | 'warning' | 'info' | 'success';
}

export type DismissibleProps = SharedProps & {
  onDismiss?: () => void;
  dismissible?: true;
};

export type NonDismissibleProps = SharedProps & {
  onDismiss?: never;
  dismissible?: false;
};

export type AlertProps = DismissibleProps | NonDismissibleProps;

export const Alert: FC<AlertProps> = (props) => {
  const recipe = useSlotRecipe({ key: 'alert' });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);
  const { title, description, link, type, icon, dismissible, ...rest } =
    restProps;
  const styles = recipe({ ...recipeProps });
  const { open, onClose } = useDisclosure({ defaultOpen: true });

  return open || !dismissible ? (
    <ChakraAlert.Root css={styles.root} status={type}>
      <ChakraAlert.Indicator css={styles.indicator}>
        {icon}
      </ChakraAlert.Indicator>
      <ChakraAlert.Content>
        {title ? (
          <ChakraAlert.Title css={styles.title}>{title}</ChakraAlert.Title>
        ) : null}
        <ChakraAlert.Description css={styles.description}>
          {description}
        </ChakraAlert.Description>
        {link ? <AlertLink {...link} /> : null}
      </ChakraAlert.Content>
      {dismissible ? (
        <Box ml="auto" position="relative">
          <CloseButton
            onClick={() => {
              onClose();
              rest.onDismiss?.();
            }}
          />
        </Box>
      ) : null}
    </ChakraAlert.Root>
  ) : null;
};
