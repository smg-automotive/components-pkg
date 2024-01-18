import { FilterPatternProps } from '../props';
import { ActionButtonProps } from '../ActionButton';

export type ModalFilterProps = FilterPatternProps &
  Omit<ActionButtonProps, 'onClose'> & {
    onModalOpen?: () => void;
    onModalClose?: () => void;
    initialModalState?: 'open' | 'closed';
    isDisabled?: boolean;
    withScrollableBox?: boolean;
    disableBodyPadding?: boolean;
    disableBodyOverflow?: boolean;
  };
