import { FilterPatternProps } from '../props';
import { ActionButtonProps } from '../ActionButton';

export type PopoverFilterProps = FilterPatternProps &
  Omit<ActionButtonProps, 'onClose'> & {
    initialPopoverState?: 'open' | 'closed';
    onPopoverClose?: () => void;
    onPopoverOpen?: () => void;
    appliedLabel?: string;
    enforceHeight?: boolean;
    triggerHeight?: 'md' | 'lg';
    isDisabled?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    modifiers?: Array<{ name: string; options?: Record<string, any> }>;
  };
