import { defineSlotRecipe, defineStyle } from '@chakra-ui/react';

const slots = [
  'container',
  'carousel',
  'slide',
  'slideContainer',
  'buttonContainer',
  'button',
  'icon',
  'pagination',
  'paginationButton',
  'paginationIconContainer',
  'dotsPaginationContainer',
  'dotsPaginationIndicator',
  'numbersPaginationButton',
] as const;

const baseContainer = defineStyle({
  height: 'full',
  width: 'full',
  '--carousel-overlay-weak': 'rgba(51,51,51,0.4)',
  '--carousel-overlay-strong': 'rgba(51,51,51,0.8)',
  '--carousel-pagination-height': '7.5rem',
  '--carousel-numbers-pagination-height': '5rem',
  '--carousel-dot-size': '6px',
  '--carousel-dot-size-active': '8px',
  '--carousel-dot-size-last': '4px',
  '--carousel-dot-margin-x': '6px',
});

const baseCarousel = defineStyle({
  overflow: 'hidden',
  position: 'relative',
});

const baseSlide = defineStyle({
  flexGrow: '0',
  flexShrink: '0',
  flexBasis: 'full',
});

const baseSlideContainer = defineStyle({
  height: 'full',
  alignItems: 'center',
  display: 'flex',
});

const baseButtonContainer = defineStyle({
  position: 'absolute',
  top: '0',
  width: 'lg',
  height: 'full',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  visibility: 'hidden',
  pointerEvents: 'none',
  cursor: 'pointer',
  _groupHover: { md: { visibility: 'visible', pointerEvents: 'auto' } },
  _focus: {
    outline: 'none',
  },
});

const baseButton = defineStyle({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'md',
  height: 'md',
  borderRadius: 'sm',
  backgroundColor: 'var(--carousel-overlay-weak)',
  color: 'white',
  _hover: { background: 'var(--carousel-overlay-strong)' },
});

const baseIcon = defineStyle({
  boxSize: 'sm',
});

const numbersPaginationButton = defineStyle({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  textAlign: 'center',
  minWidth: 'md',
  height: 'md',
  borderRadius: 'sm',
  _hover: {
    backgroundColor: 'gray.100',
  },
  '&[aria-current="true"]': {
    color: 'white',
    backgroundColor: 'gray.900',
    _hover: {
      backgroundColor: 'gray.900',
    },
  },
});

const dotsPaginationIndicator = defineStyle({
  backgroundColor: 'transparent',
  touchAction: 'pan-x',
  display: 'inline-flex',
  textDecoration: 'none',
  border: 'none',
  padding: '0',
  width: 'var(--carousel-dot-size)',
  height: 'var(--carousel-dot-size)',
  marginX: 'var(--carousel-dot-margin-x)',
  _last: {
    width: 'var(--carousel-dot-size-last)',
    height: 'var(--carousel-dot-size-last)',
    _after: {
      width: 'full',
      height: 'var(--carousel-dot-size-last)',
      content: '""',
    },
  },
  _after: {
    backgroundColor: 'gray.300',
    opacity: '40',
    borderRadius: 'full',
    width: 'full',
    height: 'var(--carousel-dot-size)',
    content: '""',
  },
  '&[aria-current="true"]': {
    width: 'var(--carousel-dot-size-active)',
    height: 'var(--carousel-dot-size-active)',
    _last: {
      width: 'var(--carousel-dot-size-active)',
      height: 'var(--carousel-dot-size-active)',
      _after: {
        width: 'full',
        height: 'var(--carousel-dot-size-active)',
        content: '""',
      },
    },
    _after: {
      backgroundColor: 'white',
      borderRadius: 'full',
      opacity: '100',
      width: 'full',
      height: 'var(--carousel-dot-size-active)',
      content: '""',
    },
  },
});

const fullScreenVariant = {
  container: defineStyle({
    backgroundColor: 'black',
    position: {
      base: 'fixed',
      md: 'static',
    },
  }),
  carousel: defineStyle({
    paddingX: {
      md: '5xl',
    },
  }),
  pagination: defineStyle({
    overflow: 'hidden',
    position: 'relative',
    paddingX: {
      base: 'md',
      md: '5xl',
    },
    height: 'var(--carousel-pagination-height)',
  }),
  paginationButton: defineStyle({
    position: 'absolute',
    top: '0',
    width: 'lg',
    height: 'full',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'transparent',
  }),
  paginationIconContainer: defineStyle({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'md',
    height: 'md',
    borderRadius: 'sm',
    backgroundColor: 'var(--carousel-overlay-strong)',
  }),
  buttonContainer: defineStyle({
    backgroundColor: 'black',
    width: 'xl',
    visibility: { base: 'hidden', md: 'visible' },
    pointerEvents: { base: 'none', md: 'auto' },
  }),
  slide: defineStyle({
    height: 'full',
  }),
  button: defineStyle({
    opacity: '100',
    backgroundColor: 'black',
  }),
  icon: defineStyle({
    boxSize: 'md',
  }),
};

export const carouselRecipe = defineSlotRecipe({
  slots,
  className: 'chakra-carousel',
  base: {
    container: baseContainer,
    carousel: baseCarousel,
    slide: baseSlide,
    slideContainer: baseSlideContainer,
    buttonContainer: baseButtonContainer,
    button: baseButton,
    icon: baseIcon,
    numbersPaginationButton,
    dotsPaginationContainer: defineStyle({
      position: 'absolute',
      width: 'full',
      bottom: 'lg',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    dotsPaginationIndicator,
  },
  variants: {
    variant: {
      fullScreen: fullScreenVariant,
    },
  },
});
