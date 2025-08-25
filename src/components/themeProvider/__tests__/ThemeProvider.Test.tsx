import React, { FC } from 'react';
import { useTheme } from '@chakra-ui/react';

import { Brand } from 'src/types/brand';
import { autoScout24Theme, motoScout24Theme } from 'src/themes';

import { screen, testingLibraryRender } from 'jest-utils';

import ThemeProvider, { Props } from '..';

const TestComponent: FC = () => {
  const theme = useTheme();

  return <div>{theme.colors.brand[100]}</div>;
};

const renderWrapper = (theme: Props['theme']) =>
  testingLibraryRender(
    <ThemeProvider theme={theme}>
      <TestComponent />
    </ThemeProvider>,
  );

describe('ThemeProvider', () => {
  it('provides autoscout24 theme', () => {
    renderWrapper(Brand.AutoScout24);
    const {
      colors: { brand },
    } = autoScout24Theme;

    expect(screen.getByText(brand[100])).toBeInTheDocument();
  });

  it('provides motoscout24 theme', () => {
    renderWrapper(Brand.MotoScout24);
    const {
      colors: { brand },
    } = motoScout24Theme;

    expect(screen.getByText(brand[100])).toBeInTheDocument();
  });
});
