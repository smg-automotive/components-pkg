const baseStyleTab = {
  textStyle: 'body',
  transitionProperty: 'common',
  transitionDuration: 'normal',
  borderBottomWidth: '3px',
  borderBottomColor: 'transparent',
  p: 'md',
  color: 'gray.600',
  _selected: {
    fontWeight: 'bold',
    color: 'gray.900',
    borderBottomColor: 'currentColor',
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
  enclosed: {
    tablist: {
      borderBottom: 'none',
    },
    tab: {
      color: 'gray.700',
      fontWeight: 'bold',
      flexBasis: '100%',
      borderBottom: '1px',
      border: '1px solid',
      borderColor: 'blue.200',
      backgroundColor: 'blue.50',
      borderRight: 'none',
      _selected: {
        backgroundColor: 'transparent',
        borderBottom: 'none',
      },
      _last: {
        borderRight: '1px solid',
        borderColor: 'blue.200',
      },
    },
    tabpanel: { ...baseStyleTabpanel, margin: '0' },
  },
  fullWidth: {
    tab: { ...baseStyleTab, flex: 1 },
    tablist: baseStyleTablist,
    tabpanel: { ...baseStyleTabpanel, margin: '0' },
  },
};

export default {
  baseStyle,
  variants,
};
