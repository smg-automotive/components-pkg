import { ButtonProps } from '@chakra-ui/react';

import { FilterPatternProps } from '../props';
import { ActionButtonProps } from '../ActionButton';

import { PaddingX } from './OpenFilterButton';

export type ModalFilterProps = FilterPatternProps &
  Omit<ActionButtonProps, 'onClose'> & {
    onModalOpen?: () => void;
    onModalClose?: () => void;
    initialModalState?: 'open' | 'closed';
    isDisabled?: boolean;
    paddingX?: PaddingX;
    trapFocus?: boolean;
    triggerSize?: 'sm' | 'md';
  } & Pick<ButtonProps, 'backgroundColor'>;
