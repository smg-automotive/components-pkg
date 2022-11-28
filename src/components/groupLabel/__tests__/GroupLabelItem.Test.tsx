import React from 'react';
import { render, screen } from '@testing-library/react';

import GroupLabel from '../';
import GroupLabelItem from '../GroupLabelItem';
import { CloseIcon } from '../../icons';

describe('<GroupLabelItem />', () => {
  const itemLabel = 'Item label';
  const itemValue = 'Item value';

  const ItemValue = () => (
    <>
      <CloseIcon data-testid="closeIcon" />
      {itemValue}
    </>
  );

  it('should display value with icon and text', () => {
    render(
      <GroupLabel>
        <GroupLabelItem label={itemLabel} value={<ItemValue />} />
      </GroupLabel>
    );

    expect(screen.getByText(itemValue)).toBeInTheDocument();
    expect(screen.getByTestId('closeIcon')).toBeInTheDocument();
  });
});
