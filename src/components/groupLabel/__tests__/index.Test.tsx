import React from 'react';
import { render, screen } from '@testing-library/react';

import GroupLabelItem from '../GroupLabelItem';
import GroupLabel from '../';

describe('<GroupLabel />', () => {
  const title = 'Group Label title';
  const itemLabel = 'Item label';
  const itemValue = 'Item value';

  it('should display component title', () => {
    render(
      <GroupLabel title={title}>
        <GroupLabelItem label={`${itemLabel} 1`} value={itemValue} />
        <GroupLabelItem label={`${itemLabel} 2`} value={itemValue} />
      </GroupLabel>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should render component without title if `title` prop is not added', () => {
    render(
      <GroupLabel>
        <GroupLabelItem label={`${itemLabel} 1`} value={itemValue} />
        <GroupLabelItem label={`${itemLabel} 2`} value={itemValue} />
      </GroupLabel>
    );

    expect(screen.queryByText(title)).not.toBeInTheDocument();
  });

  it('should display label and value for each item', () => {
    render(
      <GroupLabel title={title}>
        <GroupLabelItem label={`${itemLabel} 1`} value={itemValue} />
        <GroupLabelItem label={`${itemLabel} 2`} value={itemValue} />
      </GroupLabel>
    );

    expect(screen.getByText(`${itemLabel} 1`)).toBeInTheDocument();
    expect(screen.getByText(`${itemLabel} 2`)).toBeInTheDocument();
    expect(screen.getAllByText(itemValue)).toHaveLength(2);
  });
});
