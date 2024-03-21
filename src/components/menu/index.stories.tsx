import React from 'react';
import { action } from '@storybook/addon-actions';

import MenuComponent from './index';

const Template = ({ title }) => {
  const menuItems = [
    { text: 'Detusch', onClick: action('Detusch') },
    { text: 'English', onClick: action('English') },
    { text: 'Français', onClick: action('Français') },
    { text: 'Italiano', onClick: action('Italiano') },
  ];
  return <MenuComponent title={title} items={menuItems} />;
};

export default {
  title: 'Patterns/Data Display/Menu',
  component: MenuComponent,
};

export const Menu = {
  render: Template.bind({}),
  name: 'Menu',

  args: {
    title: 'Language',
  },
};
