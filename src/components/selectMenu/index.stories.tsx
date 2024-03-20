import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { SortIcon } from '../icons';

import SelectMenuComponent from './index';

const Template = ({ title, ...args }) => {
  const [value, setValue] = useState('de');
  const handleChange = (val) => setValue(val);

  const menuOptions = [
    { value: 'de', label: 'Detusch', onClick: action('Detusch') },
    { value: 'en', label: 'English', onClick: action('English') },
    { value: 'fr', label: 'Français', onClick: action('Français') },
    { value: 'it', label: 'Italiano', onClick: action('Italiano') },
  ];

  return (
    <SelectMenuComponent
      onChange={handleChange}
      title={title}
      value={value}
      options={menuOptions}
      {...args}
    />
  );
};

export default {
  title: 'Patterns/Data Display/SelectMenu',
  component: SelectMenuComponent,
};

export const SelectMenu = {
  render: Template.bind({}),
  name: 'SelectMenu',

  args: {
    title: 'Language',
  },
};

export const ShowHideIndicator = {
  render: Template.bind({}),
  name: 'Show/Hide Indicator',

  args: {
    title: 'Language',
    withIndicator: false,
  },
};

export const TitleWithIcon = {
  render: Template.bind({}),
  name: 'Title with icon',

  args: {
    title: 'Language',
    leftIcon: <SortIcon />,
    menuColor: 'blue.700',
    withIndicator: false,
  },
};

export const WithCustomMenuAndMenuOptionColors = {
  render: Template.bind({}),
  name: 'With custom menu and menu option colors',

  args: {
    title: 'Language',
    menuColor: 'blue.700',
    menuOptionColor: 'red.700',
  },
};
