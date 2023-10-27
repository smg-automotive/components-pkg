import { Language } from '@smg-automotive/i18n-pkg';

export const replaceLanguageInUrl = (language: Language) => {
  if (typeof window === 'undefined') {
    return;
  }

  const [_empty, currentLanguage, ..._rest] =
    window.location.pathname.split('/');

  window.location.href = window.location.href.replace(
    `/${currentLanguage}`,
    `/${language}`,
  );
};
