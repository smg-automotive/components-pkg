import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';

import Button from '../button';
import { FilterPatternProps } from './props';

export type ActionButtonProps = {
  /**
   * The primary action button if a filter is applied.
   * If a filter is not applied, a secondary close button is shown.
   */
  actionButton: {
    label: string;
    onClick?: () => void;
    href?: () => void;
  };
  onClose: () => void;
} & Pick<FilterPatternProps, 'isLocalStateApplied'>;

const FilterActionButton: FC<ActionButtonProps> = ({
  isLocalStateApplied,
  actionButton,
  onClose,
}) => {
  const { t } = useI18n();

  return (
    <Button
      onClick={
        isLocalStateApplied
          ? () => {
              actionButton.onClick?.();
              onClose();
            }
          : onClose
      }
      variant={isLocalStateApplied ? 'primary' : 'secondary'}
      width="full"
    >
      {isLocalStateApplied ? actionButton.label : t('filterSelectButton.close')}
    </Button>
  );
};

export default FilterActionButton;
