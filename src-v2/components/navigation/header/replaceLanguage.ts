import { Language } from '@smg-automotive/i18n-pkg';

export const replaceLanguage = ({
  activeLanguage,
  newLanguage,
}: {
  activeLanguage: Language;
  newLanguage: Language;
}) => {
  const updatedUrl = window.location.href.replace(
    `/${activeLanguage}`,
    `/${newLanguage}`,
  );

  window.location.replace(updatedUrl);
};
