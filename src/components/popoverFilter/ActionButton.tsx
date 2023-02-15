import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';

import Button from '../button';
import { PopoverFilterProps } from './props';

export type Props = {
  onClose: () => void;
} & Pick<PopoverFilterProps, 'isApplied' | 'actionButton'>;

const FilterActionButton: FC<Props> = ({
  isApplied,
  actionButton,
  onClose,
}) => {
  const { t } = useI18n();

  return (
    <Button
      onClick={
        isApplied
          ? () => {
              actionButton.onClick();
              onClose();
            }
          : onClose
      }
      variant={isApplied ? 'primary' : 'secondary'}
      width="full"
    >
      {isApplied ? actionButton.label : t('filterSelectButton.close')}
    </Button>
  );
};

export default FilterActionButton;
