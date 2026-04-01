import React, { FC, ReactNode } from 'react';
import {
  Box,
  Alert as ChakraAlert,
  AlertRootProps as ChakraAlertRootProps,
  RecipeVariantProps,
  useDisclosure,
  useSlotRecipe,
} from '@chakra-ui/react';

import { alertRecipe } from 'src/themes/shared/slotRecipes/alert';

import { CloseButton } from '../closeButton';
import { AlertLink } from './Link';

type AlertStatus = 'error' | 'warning' | 'info' | 'success';

type AlertLinkProps = {
  as?: 'link' | 'button' | React.ElementType;
  text: string;
  url?: string;
  isExternal?: boolean;
  onClick?: () => void;
};

type AlertRecipeProps = RecipeVariantProps<typeof alertRecipe>;
type RootProps = Omit<ChakraAlertRootProps, 'status' | 'variant' | 'title'>;

export type SharedProps = RootProps &
  Omit<AlertRecipeProps, 'status'> & {
    description: string | ReactNode;
    title?: string;
    link?: AlertLinkProps;
    icon?: React.ReactNode;
    type?: AlertStatus;
  };

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
  const recipe = useSlotRecipe({ recipe: alertRecipe });
  const { open, onClose } = useDisclosure({ defaultOpen: true });

  const {
    description,
    title,
    link,
    icon,
    type = 'info',
    dismissible = false,
    onDismiss,
    ...rest
  } = props;

  const [recipeProps, restProps] = recipe.splitVariantProps(rest);

  const styles = recipe({
    ...recipeProps,
    status: type,
  });

  if (!open && dismissible) {
    return null;
  }

  return (
    <ChakraAlert.Root {...restProps} status={type} css={styles.root}>
      <ChakraAlert.Indicator css={styles.indicator}>
        {icon}
      </ChakraAlert.Indicator>

      <ChakraAlert.Content css={styles.content}>
        {title ? (
          <ChakraAlert.Title css={styles.title}>{title}</ChakraAlert.Title>
        ) : null}

        <ChakraAlert.Description css={styles.description}>
          {description}
        </ChakraAlert.Description>

        {link ? <AlertLink {...link} /> : null}
      </ChakraAlert.Content>

      {dismissible ? (
        <Box ml="auto" position="relative" flexShrink={0}>
          <CloseButton
            onClick={() => {
              onClose();
              onDismiss?.();
            }}
          />
        </Box>
      ) : null}
    </ChakraAlert.Root>
  );
};
