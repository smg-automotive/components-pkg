import React, { FC } from 'react';
import {
  Box,
  Alert as ChakraAlert,
  RecipeVariantProps,
  useDisclosure,
  useSlotRecipe,
} from '@chakra-ui/react';

import { alertRecipe } from 'src/themes/shared/slotRecipes/alert';

import { CloseButton } from '../closeButton';
import { AlertLink } from './Link';

export interface SharedProps extends RecipeVariantProps<typeof alertRecipe> {
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
  const { description, title, link, icon, type, dismissible, onDismiss } =
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
              onDismiss?.();
            }}
          />
        </Box>
      ) : null}
    </ChakraAlert.Root>
  ) : null;
};
