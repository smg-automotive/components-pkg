import { orient } from '@chakra-ui/theme-tools';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
import { ComponentStyleConfig } from '@chakra-ui/react';
import { sliderAnatomy as parts } from '@chakra-ui/anatomy';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleContainer = defineStyle((props) => {
  const { orientation } = props;

  return {
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
      vertical: { h: '100%' },
      horizontal: { w: '100%' },
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
    w: 'sm',
    h: 'sm',
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
    _disabled: {
      bg: 'gray.300',
    },
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
}));

export default defineMultiStyleConfig({
  baseStyle,
}) as ComponentStyleConfig;
