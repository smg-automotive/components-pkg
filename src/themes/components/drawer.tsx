import { drawerAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const $bg = cssVar("drawer-bg")
const $bs = cssVar("drawer-box-shadow")

/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */
function getSize(value: string) {
  if (value === "full") {
    return definePartsStyle({
      dialog: { maxW: "100vw", h: "100vh" },
    })
  }
  return definePartsStyle({
    dialog: { maxW: value },
  })
}

const baseStyleOverlay = defineStyle({
  bg: "blue.600",
  zIndex: 0,
  top: '100px',
})

const baseStyleDialogContainer = defineStyle({
  display: "flex",
  zIndex: 3,
  justifyContent: "center",
})

const baseStyleDialog = defineStyle((props) => {
  const { isFullHeight } = props

  return {
    ...(isFullHeight && { height: "100vh" }),
    zIndex: 3,
    maxH: "100vh",
    color: "inherit",
    [$bg.variable]: "colors.white",
    [$bs.variable]: "shadows.lg",
    _dark: {
      [$bg.variable]: "colors.gray.500",
      [$bs.variable]: "shadows.dark-lg",
    },
    bg: $bg.reference,
    boxShadow: $bs.reference,
  }
})

const baseStyleHeader = defineStyle({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "bold",
})

const baseStyleCloseButton = defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3",
})

const baseStyleBody = defineStyle({
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto",
})

const baseStyleFooter = defineStyle({
  px: "6",
  py: "4",
})

const baseStyle = definePartsStyle(() => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer,
  // dialog: runIfFn(baseStyleDialog, props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton,
  body: baseStyleBody,
  footer: baseStyleFooter,
}))

const sizes = {
  xs: getSize("xs"),
  sm: getSize("md"),
  md: getSize("lg"),
  lg: getSize("2xl"),
  xl: getSize("4xl"),
  full: getSize("full"),
}

export default defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "xs",
  },
})
