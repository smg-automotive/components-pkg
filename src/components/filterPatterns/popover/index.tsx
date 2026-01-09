import { withTranslationProvider } from 'src/components/translationProvider/withTranslationProvider';

import { PopoverFilterProps } from './props';
import { PopoverFilterContent } from './Content';

export const PopoverFilter = withTranslationProvider<PopoverFilterProps>([
  'filterSelectButton',
])(PopoverFilterContent);
