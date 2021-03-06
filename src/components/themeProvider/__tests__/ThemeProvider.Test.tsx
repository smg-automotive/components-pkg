import React, { FC } from 'react';
import { useTheme } from '@chakra-ui/react';

import { autoScout24Theme, motoScout24Theme } from '../../../themes';
import { bareRender, screen } from '../../../../.jest';
import ThemeProvider, { Props } from '..';

const TestComponent: FC = () => {
  const theme = useTheme();

  return <div>{theme.colors.brand[100]}</div>;
};

const renderWrapper = (theme: Props['theme']) =>
  bareRender(
    <ThemeProvider theme={theme}>
      <TestComponent />
    </ThemeProvider>
  );

describe('ThemeProvider', () => {
  it('provides as24 theme', () => {
    renderWrapper('as24');
    const {
      colors: { brand },
    } = autoScout24Theme;

    expect(screen.getByText(brand[100])).toBeInTheDocument();
  });

  it('provides ms24 theme', () => {
    renderWrapper('ms24');
    const {
      colors: { brand },
    } = motoScout24Theme;

    expect(screen.getByText(brand[100])).toBeInTheDocument();
  });
});
