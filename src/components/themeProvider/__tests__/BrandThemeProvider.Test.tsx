import React, { FC, PropsWithChildren } from 'react';
import { useChakraContext } from '@chakra-ui/react';

import motoScout24System from '@/src/themes/motoScout24';
import autoScout24System from '@/src/themes/autoScout24';

import { screen, testingLibraryRender } from '@/jest-utils';

import { MotoScout24ThemeProvider } from '../MotoScout24ThemeProvider';
import { AutoScout24ThemeProvider } from '../AutoScout24ThemeProvider';

const TestComponent: FC = () => {
  const context = useChakraContext();
  const color = context.tokens.getByName('colors.brand.100')?.value;

  return <div>{color}</div>;
};

const renderWrapper = (Provider: FC<PropsWithChildren>) =>
  testingLibraryRender(
    <Provider>
      <TestComponent />
    </Provider>,
  );

describe('brand-specific theme providers', () => {
  it('provides autoscout24 theme without the generic provider', () => {
    renderWrapper(AutoScout24ThemeProvider);
    const expected =
      autoScout24System.tokens.getByName('colors.brand.100')?.value;

    expect(screen.getByText(expected)).toBeInTheDocument();
  });

  it('provides motoscout24 theme without the generic provider', () => {
    renderWrapper(MotoScout24ThemeProvider);
    const expected =
      motoScout24System.tokens.getByName('colors.brand.100')?.value;

    expect(screen.getByText(expected)).toBeInTheDocument();
  });
});
