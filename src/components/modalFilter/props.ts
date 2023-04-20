import { PopoverFilterProps } from '../popoverFilter/props';

export type ModalFilterProps = Omit<
  PopoverFilterProps,
  'onPopoverClose' | 'onPopoverOpen' | 'initialPopoverState'
> & {
  onModalOpen?: () => void;
  onModalClose?: () => void;
  initialModalState?: 'open' | 'closed';
};
