import { defineKeyframes } from '@chakra-ui/react';

export const keyframes = defineKeyframes({
  'expand-height': {
    from: { height: '0' },
    to: { height: 'var(--height)' },
  },
  'collapse-height': {
    from: { height: 'var(--height)' },
    to: { height: '0' },
  },
  'slide-in-top': {
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0)' },
  },
  'slide-out-top': {
    from: { transform: 'translateY(0)' },
    to: { transform: 'translateY(-100%)' },
  },
  'fade-in': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  'fade-out': {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
  skeletonPulse: {
    '0%': { backgroundColor: 'var(--start-color)' },
    '50%': { backgroundColor: 'var(--end-color)' },
    '100%': { backgroundColor: 'var(--start-color)' },
  },
  spin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  'scale-in': {
    from: {
      scale: '0.95',
    },
    to: {
      scale: '1',
    },
  },
  'scale-out': {
    from: {
      scale: '1',
    },
    to: {
      scale: '0.95',
    },
  },
  'slide-in-from-top': {
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0)' },
  },
  'slide-in-from-right': {
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0)' },
  },
  'slide-in-from-bottom': {
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0)' },
  },
  'slide-in-from-left': {
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
  },
  'slide-out-to-top': {
    from: { transform: 'translateY(0)' },
    to: { transform: 'translateY(-100%)' },
  },
  'slide-out-to-right': {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(100%)' },
  },
  'slide-out-to-bottom': {
    from: { transform: 'translateY(0)' },
    to: { transform: 'translateY(100%)' },
  },
  'slide-out-to-left': {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(-100%)' },
  },
});
