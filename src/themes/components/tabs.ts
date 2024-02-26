import { opacity } from '../shared/opacity';

const baseStyleTab = {
  textStyle: 'body',
  transitionProperty: 'common',
  transitionDuration: 'normal',
  borderBottom: '1px',
  borderColor: 'transparent',
  p: 'sm',
  marginBottom: '-1px',
  color: 'gray.600',
  _selected: {
    fontWeight: 'bold',
    color: 'gray.900',
    borderColor: 'currentColor',
  },
  _disabled: {
    _active: { bg: 'none' },
    cursor: 'not-allowed',
    opacity: opacity[40],
  },
};

const baseStyleTablist = {
  borderBottom: '1px',
  borderColor: 'gray.200',
  justifyContent: 'start',
};

const baseStyleTabpanel = {
  textStyle: 'body',
  margin: 'sm',
};

const customStyleTab = {
  padding: 'lg',
  fontWeight: 'bold',
  borderBottom: '0',
  color: 'gray.900',
  backgroundColor: '#D2D2D2',
  borderRight: '1px',
  borderColor: 'gray.50',
  '&:last-of-type': {
    borderColor: 'transparent',
  },
  _selected: {
    backgroundColor: 'white',
    borderColor: 'gray.600',
  },
};

const baseStyle = {
  tab: baseStyleTab,
  tablist: baseStyleTablist,
  tabpanel: baseStyleTabpanel,
};

const variants = {
  spaceBetween: {
    tablist: {
      borderBottom: '1px',
      borderColor: 'gray.200',
      justifyContent: 'space-between',
    },
    tab: baseStyleTab,
    tabpanel: baseStyleTabpanel,
  },
  spaceAround: {
    tablist: {
      borderBottom: '1px',
      borderColor: 'gray.200',
      justifyContent: 'space-around',
    },
    tab: baseStyleTab,
    tabpanel: baseStyleTabpanel,
  },
  custom: {
    tablist: {
      borderBottom: 0,
      borderColor: 'transparent',
    },
    tab: customStyleTab,
  },
};

export default {
  baseStyle,
  variants,
};
