const baseStyleTab = {
  textStyle: 'body',
  transitionProperty: 'common',
  transitionDuration: 'normal',
  borderBottom: '1px',
  borderColor: 'transparent',
  px: 'sm',
  py: 'md',
  marginBottom: '-1px',
  color: 'gray.600',
  _selected: {
    fontWeight: 'bold',
    color: 'gray.900',
    borderColor: 'currentColor',
    borderBottomWidth: '2px',
  },
  _disabled: {
    _active: { bg: 'none' },
    cursor: 'not-allowed',
    color: 'gray.300',
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
};

export default {
  baseStyle,
  variants,
};
