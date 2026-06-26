/* eslint-disable unicorn/filename-case */
import React, { ComponentType, FC } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';

import { TranslationProvider } from './index';

type Props = {
  language: Language;
};

export function withTranslationProvider<P extends Props>(scopes: string[]) {
  return (WrappedComponent: ComponentType<P>): FC<P> => {
    return (props) => {
      const { language } = props;

      return (
        <TranslationProvider language={language} scopes={scopes}>
          <WrappedComponent {...props} />
        </TranslationProvider>
      );
    };
  };
}
