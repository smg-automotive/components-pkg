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
  paddingY: { base: 'md', md: 'sm' },
  fontWeight: 'bold',
  borderBottom: '0',
  color: 'gray.900',
  backgroundColor: '#D2D2D2',
  overflow: 'hidden',
  marginBottom: 0,
  minWidth: { base: '3xl', md: '4xl' },
  width: 'full',
  flex: { base: 1, md: 0 },
  boxShadow: 'inset 1px -1px 10px #bbb',
  borderTopLeftRadius: 'sm',
  _selected: {
    boxShadow: 'none',
    backgroundColor: 'white',
  },
};

const customStyleTablist = {
  borderBottom: 0,
  borderColor: 'transparent',
  '& a:first-of-type': {
    flex: { base: 1, md: 0 },
    minWidth: { base: '3xl', md: '4xl' },
  },
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

const customStyleTabPanel = {
  ...baseStyleTabpanel,
  boxShadow: '0px 8px 24px 0px #0000001A',
  padding: '2xl',
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
    tabpanel: customStyleTabPanel,
  },
};

export default {
  baseStyle,
  variants,
};
