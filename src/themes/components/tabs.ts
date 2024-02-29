const baseStyleTab = {
  textStyle: 'body',
  transitionProperty: 'common',
  transitionDuration: 'normal',
  borderBottom: '1px',
  borderColor: 'transparent',
  p: 'md',
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

const customStyleTab = {
  paddingX: 'lg',
  paddingY: 'sm',
  fontWeight: 'bold',
  borderBottom: '0',
  color: 'gray.900',
  backgroundColor: '#D2D2D2',
  overflow: 'hidden',
  marginBottom: 0,
  minWidth: { base: 'full', md: '4xl' },
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  borderTopLeftRadius: 'sm',
  _selected: {
    boxShadow: 'none',
    backgroundColor: 'white',
  },
};

const customStyleTablist = {
  borderBottom: 0,
  borderColor: 'transparent',
  '& a:first-of-type > span > button': {
    borderTopRightRadius: 'sm',
    borderTopLeftRadius: 'none',
    borderLeft: '1px',
    borderColor: 'gray.600',
  },
  '& a:first-of-type > button': {
    borderTopRightRadius: 'sm',
    borderTopLeftRadius: 'none',
    borderLeft: '1px',
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
    tablist: customStyleTablist,
    tab: customStyleTab,
  },
};

export default {
  baseStyle,
  variants,
};
