import { defineSlotRecipe } from '@chakra-ui/react';

export const radioRecipe = defineSlotRecipe({
  className: 'chakra-radio',
  slots: ['root','item', 'indicator', 'text'] as const,

  base: {
    root: {
        position: 'relative',
    },
    item: { display: "flex", alignItems: "center", gap: '2xl', cursor: "pointer", border: '1px', borderColor: 'violet.400'},
    indicator: {
        position: 'absolute',
        top: 'half',
        right: 'sm',
        transform: 'translateY(-50%)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'xs',
        height: 'xs',
        pointerEvents: 'none',
        _disabled: { color: 'gray.200' },
    },
    text: { userSelect: "none", fontWeight: 'regular' },
  },

  variants: {
      variant: {
        fontRegular: {
            // indicator: {
            //     border: '1px solid black',
            // },
            text: { fontWeight: 'regular' },
          },
          fontBold: {
            // indicator: {
            //     border: '2px solid',
            // },
            text: { fontWeight: 'bold' },
          }
      },

      size: {
        sm: {
          indicator: { boxSize: 3 },
          text: { fontSize: "sm" },
        },
        md: {
          indicator: { boxSize: 4 },
          text: { fontSize: "md" },
        },
        lg: {
          indicator: { boxSize: 5 },
          text: { fontSize: "lg" },
        },
    },
    
},

  defaultVariants: { variant: "fontRegular", size: "md" },
});

