import React, { FC } from 'react';
import {
  Alert as ChakraAlert,
  Toast as ChakraToast,
  createToaster,
  Portal,
  RecipeVariantProps,
  Toaster,
  useSlotRecipe,
} from '@chakra-ui/react';

import { alertRecipe } from 'src/themes/shared/slotRecipes/alert';
import { CloseButton } from 'src/components/closeButton';
import { AlertLink } from 'src/components/alert/Link';

export const toastConfig = {
  pauseOnPageIdle: true,
  max: 5,
};

export type ToastProps = RecipeVariantProps<typeof alertRecipe> & {
  toaster: ReturnType<typeof createToaster>;
};

export const Toast: FC<ToastProps> = (props) => {
  const recipe = useSlotRecipe({ key: 'alert' });

  const [recipeProps] = recipe.splitVariantProps(props);
  const styles = recipe({ ...recipeProps });

  return (
    <Portal>
      <Toaster toaster={props.toaster} css={{ width: '90%' }}>
        {(toast) => {
          return (
            <ChakraToast.Root>
              <ChakraAlert.Root css={styles.root} status={toast.meta?.type}>
                <ChakraAlert.Indicator css={styles.indicator}>
                  {toast.meta?.icon}
                </ChakraAlert.Indicator>
                <ChakraAlert.Content>
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
                <ChakraToast.CloseTrigger
                  ml="auto"
                  position="relative"
                  alignSelf="flex-start"
                >
                  <CloseButton
                    onClick={() => {
                      toast.meta?.onClose?.();
                    }}
                  />
                </ChakraToast.CloseTrigger>
              </ChakraAlert.Root>
            </ChakraToast.Root>
          );
        }}
      </Toaster>
    </Portal>
  );
};
