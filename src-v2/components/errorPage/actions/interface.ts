import { Language } from '@smg-automotive/i18n-pkg';

export interface ActionButtonInterface {
  t: (key: string) => string;
  language: Language;
  onButtonClick?: () => void;
}
