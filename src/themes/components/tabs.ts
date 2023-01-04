const baseStyleTab = {
  textStyle: 'body',
  transitionProperty: 'common',
  transitionDuration: 'normal',
  borderBottom: '1.5px solid',
  borderColor: 'transparent',
  p: 'sm',
  marginBottom: '-1.5px',
  color: 'gray.600',
  _selected: {
    fontWeight: 'bold',
    color: 'gray.900',
    borderColor: 'currentColor',
  },
  _disabled: {
    _active: { bg: 'none' },
    cursor: 'not-allowed',
    opacity: 0.4,
  },
};

const baseStyleTablist = {
  borderBottom: '1.5px solid',
  borderColor: 'gray.200',
  justifyContent: 'start',
};

const baseStyleTabpanel = {
  textStyle: 'body',
  margin: 'sm',
};

const baseStyle = {
  tab: baseStyleTab,
  tablist: baseStyleTablist,
  tabpanel: baseStyleTabpanel,
};

export default {
  baseStyle,
};
