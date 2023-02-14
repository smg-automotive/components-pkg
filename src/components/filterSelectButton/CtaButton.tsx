import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';

import Button from '../button';
import { FilterSelectButtonProps } from './props';

export type Props = {
  onClose: () => void;
} & Pick<FilterSelectButtonProps, 'isApplied' | 'actionButton'>;
const FilterSelectCtaButton: FC<Props> = ({
  isApplied,
  actionButton,
  onClose,
}) => {
  const { t } = useI18n();

  return (
    <Button
      variant={isApplied ? 'primary' : 'secondary'}
      onClick={
        isApplied
          ? () => {
              actionButton.onClick();
              onClose();
            }
          : onClose
      }
      width="full"
    >
      {isApplied ? actionButton.label : t('filterSelectButton.close')}
    </Button>
  );
};

export default FilterSelectCtaButton;
