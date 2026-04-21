import { ButtonProps } from '@chakra-ui/react';

import { FilterPatternProps } from '@/src/components/filterPatterns/props';
import { ActionButtonProps } from '@/src/components/filterPatterns/ActionButton';

import {
  OpenFilterButtonDisplayType,
  OpenFilterButtonPaddingX,
} from './OpenFilterButton';

export type ModalFilterProps = FilterPatternProps &
  Omit<ActionButtonProps, 'onClose'> & {
    onModalOpen?: () => void;
    onModalClose?: () => void;
    initialModalState?: 'open' | 'closed';
    isDisabled?: boolean;
    paddingX?: OpenFilterButtonPaddingX;
    trapFocus?: boolean;
    triggerHeight?: 'lg' | 'md';
    showResetButton?: boolean;
    triggerDisplayType?: OpenFilterButtonDisplayType;
    appliedLabel?: string;
  } & Pick<ButtonProps, 'backgroundColor' | 'color'>;
