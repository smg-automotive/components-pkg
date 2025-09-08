import React, { FC, PropsWithChildren } from 'react';

import {
  Dialog,
  Portal,
  RecipeVariantProps,
  UseDialogProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { modalRecipe } from 'src/themes/shared/slotRecipes/modal';

import { H3 } from '../heading';
import { Button } from '../button';
import ModalCloseButton from './ModalCloseButton';
import { Box } from '../box';

type MotionPreset = 'none' | 'scale';

type DialogRootProps = RecipeVariantProps<typeof modalRecipe>;

type Sizes = 'md' | 'lg' | 'full' | 'auth0';

type ActionButton = {
  action: () => void;
  label: string;
};

export interface Props extends DialogRootProps {
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

const Modal: FC<PropsWithChildren<Props>> = ({
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
  const modalSize:
    | {
        xs: Sizes | undefined;
        sm: Sizes | undefined;
      }
    | Sizes
    | undefined =
    size || variant !== 'fullScreen' ? { xs: 'full', sm: size } : 'full';
  const bothActionButtons = primaryActionButton && secondaryActionButton;
  const recipe = useSlotRecipe({ key: 'modal' });
  const [recipeProps] = recipe.splitVariantProps({
    size: modalSize,
    motionPreset,
    variant,
    overlayColor,
  });
  const styles = recipe(recipeProps);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange} {...props}>
      <Portal>
        <Dialog.Backdrop css={styles.backdrop} />
        <Dialog.Positioner css={styles.positioner}>
          <Dialog.Content css={styles.content}>
            {title && (
              <Box borderBottom="1px" borderColor="gray.100">
                <Dialog.Header css={styles.header}>
                  <H3>{title}</H3>
                  <Dialog.CloseTrigger asChild css={styles.closeTrigger}>
                    <ModalCloseButton fontSize="base" />
                  </Dialog.CloseTrigger>
                </Dialog.Header>
              </Box>
            )}
            <Dialog.Body
              css={styles.body}
              p={disableBodyPadding ? '0' : undefined}
            >
              {children}
            </Dialog.Body>

            {(primaryActionButton || secondaryActionButton) && (
              <Box borderTop="1px" borderColor="gray.100">
                <Dialog.Footer
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
                </Dialog.Footer>
              </Box>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default Modal;
