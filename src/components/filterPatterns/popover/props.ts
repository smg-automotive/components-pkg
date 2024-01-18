import { FilterPatternProps } from '../props';
import { ActionButtonProps } from '../ActionButton';

export type PopoverFilterProps = FilterPatternProps &
  Omit<ActionButtonProps, 'onClose'> & {
    initialPopoverState?: 'open' | 'closed';
    onPopoverClose?: () => void;
    onPopoverOpen?: () => void;
    appliedLabel?: string;
    disableBodyPadding?: boolean;
    disableBodyOverflow?: boolean;
  };
