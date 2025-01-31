import { defineRecipe } from "@chakra-ui/react"

export const skeletonRecipe = defineRecipe({
  className: 'chakra-skeleton',
  base: {
    opacity: '70',
    borderRadius: 'xs',
    animation: 'pulse',
    background: 'gray.100',
    
    "&::before, &::after, *": {
      visibility: "hidden",
    },
  },

  variants: {
    // loading: {
    //   true: {
    //     borderRadius: "l2",
    //     boxShadow: "none",
    //     backgroundClip: "padding-box",
    //     cursor: "default",
    //     color: "transparent",
    //     pointerEvents: "none",
    //     userSelect: "none",
    //     flexShrink: "0",
    //     "&::before, &::after, *": {
    //       visibility: "hidden",
    //     },
    //   },
    //   false: {
    //     background: "unset",
    //     animation: "fade-in var(--fade-duration, 0.1s) ease-out !important",
    //   },
    // },
    variant: {
      pulse: {
        // background: "bg.emphasized",
        // animation: "pulse",
        // animationDuration: "var(--duration, 1.2s)",
      },
      // shine: {
      //   "--animate-from": "200%",
      //   "--animate-to": "-200%",
      //   "--start-color": "colors.bg.muted",
      //   "--end-color": "colors.bg.emphasized",
      //   backgroundImage:
      //     "linear-gradient(270deg,var(--start-color),var(--end-color),var(--end-color),var(--start-color))",
      //   backgroundSize: "400% 100%",
      //   animation: "bg-position var(--duration, 5s) ease-in-out infinite",
      // },
      // none: {
      //   animation: "none",
      // },
    },
  },

  // defaultVariants: {
  //   variant: "pulse",
  //   loading: true,
  // },
})


// import { getColor } from '@chakra-ui/theme-tools';
// import {
//   cssVar,
//   defineStyle,
//   defineStyleConfig,
// } from '@chakra-ui/styled-system';

// const $startColor = cssVar('skeleton-start-color');
// const $endColor = cssVar('skeleton-end-color');

// const baseStyle = defineStyle((props) => {
//   const { startColor = 'gray.100', endColor = 'gray.400', theme } = props;

//   const start = getColor(theme, startColor);
//   const end = getColor(theme, endColor);

//   return {
//     [$startColor.variable]: start,
//     [$endColor.variable]: end,
//     opacity: 0.7,
//     borderRadius: '2px',
//     borderColor: start,
//     background: end,
//   };
// });

// const skeletonTheme = defineStyleConfig({
//   baseStyle,
// });

// export default skeletonTheme;
