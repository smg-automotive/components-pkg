import { Colors } from 'src/themes/shared/tokens/colors';

import { PaddingX } from './OpenFilterButton';
import { FilterPatternProps } from '../props';
import { ActionButtonProps } from '../ActionButton';

export type DialogFilterProps = FilterPatternProps &
  Omit<ActionButtonProps, 'onClose'> & {
    onDialogOpen?: () => void;
    onDialogClose?: () => void;
    initialDialogState?: 'open' | 'closed';
    isDisabled?: boolean;
    paddingX?: PaddingX;
    backgroundColor?: Colors;
    trapFocus?: boolean;
  };
