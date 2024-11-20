import { orient } from '@chakra-ui/theme-tools';
import {
  calc,
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/styled-system';
import { ComponentStyleConfig } from '@chakra-ui/react';
import { sliderAnatomy as parts } from '@chakra-ui/anatomy';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const $thumbSize = cssVar('slider-thumb-size');

const baseStyleContainer = defineStyle((props) => {
  const { orientation } = props;

  return {
    [$thumbSize.variable]: 'sizes.sm',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    _disabled: {
      opacity: 0.6,
      cursor: 'default',
      pointerEvents: 'none',
    },
    ...orient({
      orientation,
      vertical: {
        h: '100%',
        px: calc($thumbSize.reference).divide(2).toString(),
      },
      horizontal: {
        w: '100%',
        py: calc($thumbSize.reference).divide(2).toString(),
      },
    }),
  };
});

const baseStyleTrack = defineStyle((props) => {
  const orientationStyles = orient({
    orientation: props.orientation,
    horizontal: { h: '4' },
    vertical: { w: '4' },
  });

  return {
    ...orientationStyles,
    overflow: 'hidden',
    borderRadius: 'sm',
    bg: 'gray.300',
    _disabled: {
      bg: 'gray.400',
    },
  };
});

const baseStyleThumb = defineStyle((props) => {
  const { orientation } = props;
  const orientationStyle = orient({
    orientation,
    vertical: {
      left: '50%',
      transform: `translateX(-50%)`,
      _active: {
        transform: `translateX(-50%) scale(1.15)`,
      },
    },
    horizontal: {
      top: '50%',
      transform: `translateY(-50%)`,
      _active: {
        transform: `translateY(-50%) scale(1.15)`,
      },
    },
  });

  return {
    ...orientationStyle,
    w: $thumbSize.reference,
    h: $thumbSize.reference,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    outline: 0,
    zIndex: 1,
    borderRadius: 'full',
    bg: 'white',
    boxShadow: 'base',
    border: '1px solid',
    borderColor: 'gray.400',
    transitionProperty: 'transform',
    transitionDuration: 'normal',
    _focusVisible: {
      boxShadow: 'outline',
    },
    _active: {
      boxShadow: '0 0 0 8px #2988E14D', // this is blue.50 with 30% opacity
    },
    _disabled: {
      bg: 'gray.300',
    },
  };
});

const baseStyleMark = defineStyle(() => {
  return {
    mt: '2xl',
    fontSize: 'sm',
    transform: 'translateX(-50%)',
    whiteSpace: 'nowrap',
  };
});

const baseStyleFilledTrack = defineStyle(() => ({
  width: 'inherit',
  height: 'inherit',
  bg: 'gray.900',
}));

const baseStyle = definePartsStyle((props) => ({
  container: baseStyleContainer(props),
  track: baseStyleTrack(props),
  thumb: baseStyleThumb(props),
  filledTrack: baseStyleFilledTrack(),
  mark: baseStyleMark(),
}));

export default defineMultiStyleConfig({
  baseStyle,
}) as ComponentStyleConfig;
