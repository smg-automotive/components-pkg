import React, { FC, PropsWithChildren } from 'react';
import { filterDictionaryScopes, Language } from '@smg-automotive/i18n-pkg';

import { I18nProvider } from 'src/utilities/i18nInit';
import { dictionaries } from 'src/locales';
import logger from 'src/lib/logger';

interface Props {
  language: Language;
  scopes: string[];
}

export const TranslationProvider: FC<PropsWithChildren<Props>> = ({
  language,
  scopes,
  children,
}) => {
  return (
    <I18nProvider
      language={language}
      lngDict={filterDictionaryScopes({
        dictionaries: dictionaries,
        language,
        dictionaryScopes: scopes,
      })}
      onMissingTranslation={logger.onMissingTranslation}
    >
      {children}
    </I18nProvider>
  );
};
