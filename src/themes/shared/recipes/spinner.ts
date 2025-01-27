import { defineRecipe } from "@chakra-ui/react"

export const spinnerRecipe = defineRecipe({
  className: 'chakra-spinner',
  base: {
    display: 'inline-block',
    borderColor: 'gray.900',
    border: '2px',
    borderRadius: 'full',
    '--spinner-size': 'sm',
    width: 'var(--spinner-size)',
    height: 'var(--spinner-size)',
    animation: 'spin',
    '--spinner-track-color': 'transparent',
    borderBottomColor: 'var(--spinner-track-color)',
    borderInlineStartColor: 'var(--spinner-track-color)',
  },
  variants: {
    size: {
      inherit: { '--spinner-size': '1.5rem' },
      xs: { '--spinner-size': 'xs' },
      sm: { '--spinner-size': 'sm' },
      md: { '--spinner-size': 'md' },
      lg: { '--spinner-size': 'lg' },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})
