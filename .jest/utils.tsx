import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { render } from '@testing-library/react';
import ThemeProvider, { Props } from '../src/components/themeProvider';


const Wrapper = (theme: Props['theme'] ): FC<PropsWithChildren<{}>> => ({ children }) => (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )

const customRender = (
  ui: ReactElement,
  options = { theme: 'as24' as const},
) => {
  const { theme, ...rest } = options;
  return render(ui, { wrapper: Wrapper(theme), ...rest });
};

export * from '@testing-library/react';
export { customRender as render };
export { render as bareRender };
