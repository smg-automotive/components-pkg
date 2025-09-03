import React from 'react';
import userEvent from '@testing-library/user-event';
import { multiTenantUser } from '@smg-automotive/auth/fixtures';

import { render, screen, waitFor } from 'jest-utils';

import TenantSelection, { TenantSelectionProps } from '..';

const renderWrapper = ({
  user,
  selectTenant = jest.fn(),
}: {
  user: TenantSelectionProps['user'];
  selectTenant?: TenantSelectionProps['selectTenant'];
}) =>
  render(
    <TenantSelection user={user} selectTenant={selectTenant} language="de" />,
  );

describe('TenantSelection', () => {
  it('renders the TenantSelection component', () => {
    renderWrapper({ user: multiTenantUser({ forceTenantSelection: true }) });

    expect(
      screen.getByText('Wählen Sie eine Ihrer Garagen'),
    ).toBeInTheDocument();
  });

  it('does not render the component if we dont force the selection', async () => {
    renderWrapper({ user: null });

    const matchingElements = screen.queryAllByText(
      'Wählen Sie eine Ihrer Garagen',
    );
    expect(matchingElements).toEqual([]);
  });

  it('allows selecting a tenant', async () => {
    const user = userEvent.setup();
    const mockSelectTenant = jest.fn();
    renderWrapper({
      user: multiTenantUser({ forceTenantSelection: true }),
      selectTenant: mockSelectTenant,
    });

    expect(screen.getByText('Anmelden')).toBeDisabled();

    user.click(screen.getByText('Garage auswählen'));
    await screen.findByText('Garage Amir Basel - 6002');
    user.click(screen.getByText('Garage Amir Basel - 6002'));

    const loginButton = await screen.findByText('Anmelden');
    expect(loginButton).toBeEnabled();

    user.click(loginButton);
    return waitFor(() => {
      expect(mockSelectTenant).toHaveBeenCalledWith(6002);
    });
  });
});
