import { Colors } from 'src/themes/shared/tokens/colors';

import { PaddingX } from './OpenFilterButton';
import { FilterPatternProps } from '../props';
import { ActionButtonProps } from '../ActionButton';

export type ModalFilterProps = FilterPatternProps &
  Omit<ActionButtonProps, 'onClose'> & {
    onModalOpen?: () => void;
    onModalClose?: () => void;
    initialModalState?: 'open' | 'closed';
    isDisabled?: boolean;
    paddingX?: PaddingX;
    backgroundColor?: Colors;
  };
