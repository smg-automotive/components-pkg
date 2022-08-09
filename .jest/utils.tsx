/* eslint-disable unicorn/filename-case */
import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { render as testingLibraryRender } from '@testing-library/react';

import { ThemeProvider, ThemeProviderProps } from '../src/';

const Wrapper = (theme: ThemeProviderProps['theme']): FC<PropsWithChildren> => {
  const ThemeRenderer: FC<PropsWithChildren> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };
  return ThemeRenderer;
};

// eslint-disable-next-line import/export
export * from '@testing-library/react';

// eslint-disable-next-line import/export
export const render = (
  ui: ReactElement,
  options = { theme: 'as24' as const }
) => {
  const { theme, ...rest } = options;
  return testingLibraryRender(ui, { wrapper: Wrapper(theme), ...rest });
};
export { testingLibraryRender };
