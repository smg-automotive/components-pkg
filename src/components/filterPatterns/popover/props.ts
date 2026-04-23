import { ZIndex } from 'src/themes/shared/tokens/zIndex';

import { FilterPatternProps } from '@/src/components/filterPatterns/props';
import { ActionButtonProps } from '@/src/components/filterPatterns/ActionButton';
export type PopoverFilterProps = FilterPatternProps &
  Omit<ActionButtonProps, 'onClose'> & {
    initialPopoverState?: 'open' | 'closed';
    onPopoverClose?: () => void;
    onPopoverOpen?: () => void;
    appliedLabel?: string;
    enforceHeight?: boolean;
    triggerHeight?: 'md' | 'lg';
    disabled?: boolean;
    hasFlip?: boolean;
    zIndex?: ZIndex;
  };
