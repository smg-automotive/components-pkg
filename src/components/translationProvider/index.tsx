import React, { FC, PropsWithChildren } from 'react';
import {
  filterDictionaryScopes,
  I18nProvider,
  Language,
} from '@smg-automotive/i18n-pkg';

import { dictionaries } from 'src/locales';
import logger from 'src/lib/logger';

interface Props {
  language: Language;
  scopes: string[];
}

const TranslationProvider: FC<PropsWithChildren<Props>> = ({
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

export default TranslationProvider;
