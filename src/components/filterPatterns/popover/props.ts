import { FilterPatternProps } from '../props';
import { ActionButtonProps } from '../ActionButton';
import { FocusLockProps } from '@chakra-ui/react';

export type PopoverFilterProps = FilterPatternProps &
  Omit<ActionButtonProps, 'onClose'> & {
    initialPopoverState?: 'open' | 'closed';
    initialFocusRef: FocusLockProps['initialFocusRef'];

    onPopoverClose?: () => void;
    onPopoverOpen?: () => void;
  };
