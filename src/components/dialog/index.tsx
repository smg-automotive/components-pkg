import React, { FC, PropsWithChildren } from 'react';

import {
  Dialog as ChakraDialog,
  ConditionalValue,
  Portal,
  RecipeVariantProps,
  UseDialogProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { dialogRecipe } from 'src/themes/shared/slotRecipes/dialog';

import { H3 } from '../heading';
import { Button } from '../button';
import DialogCloseButton from './DialogCloseButton';
import { Box } from '../box';

type MotionPreset = 'none' | 'scale';

type DialogRootProps = RecipeVariantProps<typeof dialogRecipe>;

type Sizes = 'md' | 'lg' | 'full' | 'auth0';

type ActionButton = {
  action: () => void;
  label: string;
};

export interface DialogProps extends DialogRootProps {
  title?: string;
  open?: UseDialogProps['open'];
  onOpenChange?: UseDialogProps['onOpenChange'];
  motionPreset?: MotionPreset;
  primaryActionButton?: ActionButton;
  secondaryActionButton?: ActionButton;
  variant?: 'fullScreen' | 'topScroll';
  size?: Sizes;
  disableBodyPadding?: boolean;
  overlayColor?: 'gray';
}

export const Dialog: FC<PropsWithChildren<DialogProps>> = ({
  title,
  open,
  onOpenChange,
  primaryActionButton,
  secondaryActionButton,
  children,
  size,
  motionPreset = 'scale',
  variant,
  disableBodyPadding = false,
  overlayColor,
  ...props
}) => {
  const dialogSize: ConditionalValue<
    'md' | 'lg' | 'full' | 'auth0' | undefined
  > = size || variant !== 'fullScreen' ? { xs: 'full', sm: size } : 'full';
  const bothActionButtons = primaryActionButton && secondaryActionButton;
  const recipe = useSlotRecipe({ recipe: dialogRecipe });
  const [recipeProps] = recipe.splitVariantProps({
    size: dialogSize,
    motionPreset,
    variant,
    overlayColor,
  });
  const styles = recipe(recipeProps);

  return (
    <ChakraDialog.Root open={open} onOpenChange={onOpenChange} {...props}>
      <Portal>
        <ChakraDialog.Backdrop css={styles.backdrop} />
        <ChakraDialog.Positioner css={styles.positioner}>
          <ChakraDialog.Content css={styles.content}>
            {title && (
              <Box borderBottom="1px" borderColor="gray.100">
                <ChakraDialog.Header css={styles.header}>
                  <H3>{title}</H3>
                  <ChakraDialog.CloseTrigger asChild css={styles.closeTrigger}>
                    <DialogCloseButton fontSize="base" />
                  </ChakraDialog.CloseTrigger>
                </ChakraDialog.Header>
              </Box>
            )}
            <ChakraDialog.Body
              css={styles.body}
              p={disableBodyPadding ? '0' : undefined}
            >
              {children}
            </ChakraDialog.Body>

            {(primaryActionButton || secondaryActionButton) && (
              <Box borderTop="1px" borderColor="gray.100">
                <ChakraDialog.Footer
                  display="flex"
                  justifyContent={
                    bothActionButtons ? 'space-between' : 'flex-start'
                  }
                  gap={bothActionButtons ? 'sm' : '0'}
                  css={styles.footer}
                >
                  {secondaryActionButton ? (
                    <Button
                      variant="secondary"
                      onClick={secondaryActionButton.action}
                      width={{ base: 'full', sm: 'fit' }}
                    >
                      {secondaryActionButton.label}
                    </Button>
                  ) : null}
                  {primaryActionButton ? (
                    <Button
                      variant="primary"
                      onClick={primaryActionButton.action}
                      width={{ base: 'full', sm: 'fit' }}
                    >
                      {primaryActionButton.label}
                    </Button>
                  ) : null}
                </ChakraDialog.Footer>
              </Box>
            )}
          </ChakraDialog.Content>
        </ChakraDialog.Positioner>
      </Portal>
    </ChakraDialog.Root>
  );
};
