import { ButtonProps } from '@chakra-ui/react';

import { FilterPatternProps } from '../props';
import { ActionButtonProps } from '../ActionButton';

export type ModalFilterProps = FilterPatternProps &
  Omit<ActionButtonProps, 'onClose'> & {
    onModalOpen?: () => void;
    onModalClose?: () => void;
    initialModalState?: 'open' | 'closed';
    isDisabled?: boolean;
  } & Pick<ButtonProps, 'paddingX' | 'backgroundColor'>;
