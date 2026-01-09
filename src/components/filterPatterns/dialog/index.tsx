import { withTranslationProvider } from 'src/components/translationProvider/withTranslationProvider';

import { DialogFilterProps } from './props';
import { DialogFilterContent } from './Content';

export const DialogFilter = withTranslationProvider<DialogFilterProps>([
  'filterSelectButton',
])(DialogFilterContent);
