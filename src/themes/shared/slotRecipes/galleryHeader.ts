import { defineSlotRecipe, defineStyle } from '@chakra-ui/react';

const baseStyleContainer = defineStyle({
  color: 'white',
  px: '2xl',
  py: 'lg',
  position: {
    base: 'fixed',
    md: 'static',
  },
  top: '0',
  left: '0',
  right: '0',
  zIndex: 'docked',
});

const baseStyleGrid = defineStyle({
  alignItems: 'center',
});

const baseStyleChildrenContainer = defineStyle({
  // This will be shown only above md breakpoint
});

const baseStyleCountContainer = defineStyle({
  textAlign: {
    base: 'left',
    md: 'center',
  },
});

const baseStyleCloseContainer = defineStyle({
  textAlign: 'right',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

const slots = ['container', 'grid', 'childrenContainer', 'countContainer', 'closeContainer'] as const;

export const galleryHeaderRecipe = defineSlotRecipe({
  slots,
  className: 'chakra-gallery-header',
  base: {
    container: baseStyleContainer,
    grid: baseStyleGrid,
    childrenContainer: baseStyleChildrenContainer,
    countContainer: baseStyleCountContainer,
    closeContainer: baseStyleCloseContainer,
  },
});
