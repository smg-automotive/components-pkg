import React, { FC, Fragment, PropsWithChildren, ReactElement } from 'react';
import {
  Queries,
  RenderHookOptions,
  RenderOptions,
  render as testingLibraryRender,
  renderHook as testingLibraryRenderHook,
} from '@testing-library/react';

import { Brand } from 'src/types/brand';

import ThemeProvider, {
  type Props as ThemeProviderProps,
} from '../src/components/themeProvider';

type WrapperOptions = {
  theme?: ThemeProviderProps['theme'];
  wrapper?: RenderOptions['wrapper'];
};

const WrapperFactory = ({
  theme = Brand.AutoScout24,
  wrapper: Wrapper = Fragment,
}: WrapperOptions) => {
  const ThemeRenderer: FC<PropsWithChildren> = ({ children }) => {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    );
  };
  return ThemeRenderer;
};

export * from '@testing-library/react';

export const render = (
  ui: ReactElement,
  options: RenderOptions & WrapperOptions = {},
) => {
  const { theme, wrapper, ...renderOptions } = options;
  return testingLibraryRender(ui, {
    wrapper: WrapperFactory({
      theme,
      wrapper,
    }),
    ...renderOptions,
  });
};

export const renderHook = <
  Result,
  Props,
  Q extends Queries,
  Container extends DocumentFragment,
  BaseElement extends DocumentFragment,
>(
  hook: (props: Props) => Result,
  options: RenderHookOptions<Props, Q, Container, BaseElement> &
    WrapperOptions = {},
) => {
  const { theme, wrapper, ...renderOptions } = options;
  return testingLibraryRenderHook(hook, {
    wrapper: WrapperFactory({
      theme,
      wrapper,
    }),
    ...renderOptions,
  });
};
export { testingLibraryRender };
