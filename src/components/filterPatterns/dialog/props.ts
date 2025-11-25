import { Colors } from 'src/themes/shared/tokens/colors';

import {
  OpenFilterButtonDisplayType,
  OpenFilterButtonPaddingX,
} from './OpenFilterButton';
import { FilterPatternProps } from '../props';
import { ActionButtonProps } from '../ActionButton';

export type DialogFilterProps = FilterPatternProps &
  Omit<ActionButtonProps, 'onClose'> & {
    onDialogOpen?: () => void;
    onDialogClose?: () => void;
    initialDialogState?: 'open' | 'closed';
    isDisabled?: boolean;
    backgroundColor?: Colors;
    color?: Colors;
    paddingX?: OpenFilterButtonPaddingX;
    trapFocus?: boolean;
    triggerHeight?: 'lg' | 'md';
    showResetButton?: boolean;
    triggerDisplayType?: OpenFilterButtonDisplayType;
    appliedLabel?: string;
  };
