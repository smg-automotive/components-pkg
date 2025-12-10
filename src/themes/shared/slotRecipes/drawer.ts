import { defineSlotRecipe } from '@chakra-ui/react';

export const drawerRecipe = defineSlotRecipe({
  slots: ['root', 'backdrop', 'positioner', 'content', 'body', 'closeTrigger'],
  className: 'chakra-drawer',
  base: {
    root: {},
    backdrop: {
      background: 'blackAlpha.500',
      position: 'fixed',
      insetInlineStart: '0',
      top: '0',
      width: 'full',
      height: 'full',
      zIndex: 'overlay',
      _open: {
        animationName: 'fade-in',
        animationDuration: 'normal',
      },
      _closed: {
        animationName: 'fade-out',
        animationDuration: 'normal',
      },
    },
    positioner: {
      display: 'flex',
      width: 'full',
      height: 'full',
      position: 'fixed',
      insetInlineStart: '0',
      top: '0',
      zIndex: 'modal',
    },
    content: {
      bg: 'white',
      boxShadow: 'lg',
    },
    body: {
      flex: 1,
      padding: 'lg',
      overflowY: 'auto',
    },
    closeTrigger: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'xs',
      height: 'xs',
      borderRadius: 'sm',
      color: 'gray.800',
      fontSize: 'base',
      cursor: 'pointer',
      _hover: {
        bg: 'gray.100',
      },
    },
  },
  variants: {
    placement: {
      top: {
        positioner: {
          alignItems: 'flex-start',
          justifyContent: 'stretch',
        },
      },
      bottom: {
        positioner: {
          alignItems: 'flex-end',
          justifyContent: 'stretch',
        },
      },
      left: {
        positioner: {
          alignItems: 'stretch',
          justifyContent: 'flex-start',
        },
      },
      right: {
        positioner: {
          alignItems: 'stretch',
          justifyContent: 'flex-end',
        },
      },
    },
    size: {
      xl: {
        content: {
          width: '4xl',
        },
      },
      half: {
        content: {
          width: 'half',
        },
      },
      full: {
        content: {
          width: 'full',
        },
      },
    },
  },
  compoundVariants: [
    {
      placement: 'top',
      size: 'xl',
      css: {
        content: {
          width: 'full',
          height: '4xl',
          _open: {
            animationName: ['slide-in-from-top'],
            animationDuration: 'slow',
          },
          _closed: {
            animationName: ['slide-out-to-top'],
            animationDuration: 'fast',
          },
        },
      },
    },
    {
      placement: 'top',
      size: 'half',
      css: {
        content: {
          width: 'full',
          height: '8xl',
          _open: {
            animationName: ['slide-in-from-top'],
            animationDuration: 'slow',
          },
          _closed: {
            animationName: ['slide-out-to-top'],
            animationDuration: 'fast',
          },
        },
      },
    },
    {
      placement: 'top',
      size: 'full',
      css: {
        content: {
          width: 'full',
          height: 'full',
          _open: {
            animationName: ['slide-in-from-top'],
            animationDuration: 'slow',
          },
          _closed: {
            animationName: ['slide-out-to-top'],
            animationDuration: 'fast',
          },
        },
      },
    },
    {
      placement: 'right',
      css: {
        content: {
          _open: {
            animationName: ['slide-in-from-right'],
            animationDuration: 'slow',
          },
          _closed: {
            animationName: ['slide-out-to-right'],
            animationDuration: 'fast',
          },
        },
      },
    },
    {
      placement: 'bottom',
      size: 'xl',
      css: {
        content: {
          width: 'full',
          height: '4xl',
          _open: {
            animationName: ['slide-in-from-bottom'],
            animationDuration: 'slow',
          },
          _closed: {
            animationName: ['slide-out-to-bottom'],
            animationDuration: 'fast',
          },
        },
      },
    },
    {
      placement: 'bottom',
      size: 'half',
      css: {
        content: {
          width: 'full',
          height: '8xl',
          _open: {
            animationName: ['slide-in-from-bottom'],
            animationDuration: 'slow',
          },
          _closed: {
            animationName: ['slide-out-to-bottom'],
            animationDuration: 'fast',
          },
        },
      },
    },
    {
      placement: 'bottom',
      size: 'full',
      css: {
        content: {
          width: 'full',
          height: 'full',
          _open: {
            animationName: ['slide-in-from-bottom'],
            animationDuration: 'slow',
          },
          _closed: {
            animationName: ['slide-out-to-bottom'],
            animationDuration: 'fast',
          },
        },
      },
    },
    {
      placement: 'left',
      css: {
        content: {
          _open: {
            animationName: ['slide-in-from-left'],
            animationDuration: 'slow',
          },
          _closed: {
            animationName: ['slide-out-to-left'],
            animationDuration: 'fast',
          },
        },
      },
    },
  ],
  defaultVariants: {
    placement: 'right',
    size: 'half',
  },
});
