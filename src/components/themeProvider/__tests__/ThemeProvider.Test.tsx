import React, { FC } from 'react';
import { useChakraContext } from '@chakra-ui/react';

import { Brand } from 'src/types/brand';
import { autoScout24System, motoScout24System } from 'src/themes';
import { screen, testingLibraryRender } from '.jest';

import { Props, ThemeProvider } from '..';

const TestComponent: FC = () => {
  const context = useChakraContext();
  const color = context.tokens.getByName('colors.brand.100')?.value;

  return <div>{color}</div>;
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
    const expected =
      autoScout24System.tokens.getByName('colors.brand.100')?.value;

    expect(screen.getByText(expected)).toBeInTheDocument();
  });

  it('provides motoscout24 theme', () => {
    renderWrapper(Brand.MotoScout24);
    const expected =
      motoScout24System.tokens.getByName('colors.brand.100')?.value;

    expect(screen.getByText(expected)).toBeInTheDocument();
  });
});
