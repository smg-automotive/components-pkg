import React, { FC } from 'react';
import {
  Box,
  Alert as ChakraAlert,
  Toast as ChakraToast,
  createToaster,
  Portal,
  RecipeVariantProps,
  Toaster,
  useSlotRecipe,
} from '@chakra-ui/react';

import { alertRecipe } from '@/src/themes/shared/slotRecipes/alert';
import { CloseButton } from '@/src/components/closeButton';
import { AlertLink } from '@/src/components/alert/Link';

export const toastConfig = {
  pauseOnPageIdle: true,
  max: 5,
};

type ToastStatus = 'error' | 'warning' | 'info' | 'success';

export type ToastProps = Omit<
  RecipeVariantProps<typeof alertRecipe>,
  'status'
> & {
  toaster: ReturnType<typeof createToaster>;
};

export const Toast: FC<ToastProps> = ({ toaster, ...props }) => {
  const recipe = useSlotRecipe({ recipe: alertRecipe });

  return (
    <Portal>
      <Toaster toaster={toaster} css={{ width: '90%' }}>
        {(toast) => {
          const type = (toast.meta?.type as ToastStatus | undefined) ?? 'info';
          const [recipeProps] = recipe.splitVariantProps(props);

          const styles = recipe({
            ...recipeProps,
            status: type,
          });

          return (
            <ChakraToast.Root
              css={{
                maxWidth: '560px',
                minWidth: '300px',
                translate: 'var(--x) var(--y)',
                scale: 'var(--scale)',
                opacity: 'var(--opacity)',
                height: 'var(--height)',
                zIndex: 'var(--z-index)',
                willChange: 'transform, opacity, height',
                transitionProperty: 'common',
                transitionDuration: 'normal',
              }}
            >
              <ChakraAlert.Root css={styles.root} status={type}>
                <ChakraAlert.Indicator css={styles.indicator}>
                  {toast.meta?.icon}
                </ChakraAlert.Indicator>
                <ChakraAlert.Content css={styles.content}>
                  {toast.title ? (
                    <ChakraAlert.Title css={styles.title}>
                      {toast.title}
                    </ChakraAlert.Title>
                  ) : null}

                  <ChakraAlert.Description css={styles.description}>
                    {toast.description}
                  </ChakraAlert.Description>
                  {toast.meta?.link ? (
                    <AlertLink {...toast.meta?.link} />
                  ) : null}
                </ChakraAlert.Content>
                <Box css={styles.toastClose}>
                  <CloseButton
                    onClick={() => {
                      toast.meta?.onClose?.();
                    }}
                  />
                </Box>
              </ChakraAlert.Root>
            </ChakraToast.Root>
          );
        }}
      </Toaster>
    </Portal>
  );
};
