import { FocusLockProps } from '@chakra-ui/react';

import { FilterPatternProps } from '../props';
import { ActionButtonProps } from '../ActionButton';

export type PopoverFilterProps = FilterPatternProps &
  Omit<ActionButtonProps, 'onClose'> & {
    initialPopoverState?: 'open' | 'closed';
    initialFocusRef?: FocusLockProps['initialFocusRef'];
    onPopoverClose?: () => void;
    onPopoverOpen?: () => void;
  };
