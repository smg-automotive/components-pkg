import React from 'react';

import { H1 as H1Component, H2 as H2Component, H3 as H3Component, H4 as H4Component, H5 as H5Component, H6 as H6Component } from './index';

export default {
  title: 'Components/Utils/Heading',
  component: H1Component,
};

export const H1 = {
  render: () => <H1Component>Title</H1Component>,
  name: 'H1',
};

export const H2 = {
  render: () => <H2Component>Title</H2Component>,
  name: 'H2',
};

export const H3 = {
  render: () => <H3Component>Title</H3Component>,
  name: 'H3',
};

export const H4 = {
  render: () => <H4Component>Title</H4Component>,
  name: 'H4',
};

export const H5 = {
  render: () => <H5Component>Title</H5Component>,
  name: 'H5',
};

export const H6 = {
  render: () => <H6Component>Title</H6Component>,
  name: 'H6',
};
