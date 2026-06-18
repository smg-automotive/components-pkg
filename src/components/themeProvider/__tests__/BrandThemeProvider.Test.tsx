import React, { type FC, type PropsWithChildren } from 'react';
import { useTheme } from '@chakra-ui/react';

import { theme as motoScout24Theme } from '@/src/themes/motoscout24';
import { theme as autoScout24Theme } from '@/src/themes/autoscout24';

import { screen, testingLibraryRender } from '@/jest-utils';

import { MotoScout24Providers } from '../MotoScout24ThemeProvider';
import AutoScout24ThemeProvider from '../AutoScout24ThemeProvider';

const TestComponent: FC = () => {
  const theme = useTheme();

  return <div>{theme.colors.brand[100]}</div>;
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

    expect(
      screen.getByText(autoScout24Theme.colors.brand[100]),
    ).toBeInTheDocument();
  });

  it('provides motoscout24 theme without the generic provider', () => {
    renderWrapper(MotoScout24Providers);

    expect(
      screen.getByText(motoScout24Theme.colors.brand[100]),
    ).toBeInTheDocument();
  });
});
