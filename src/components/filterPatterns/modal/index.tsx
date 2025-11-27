import { withTranslationProvider } from 'src/components/translationProvider/withTranslationProvider';

import { ModalFilterProps } from './props';
import ModalFilterContent from './Content';

export const ModalFilter = withTranslationProvider<ModalFilterProps>([
  'filterSelectButton',
])(ModalFilterContent);

export default ModalFilter;
