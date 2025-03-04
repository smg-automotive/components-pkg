import { ManagedSeller } from '@smg-automotive/auth';

import { createTenantLabel } from '../createTenantLabel';

describe('createTenantLabel', () => {
  it("should return the managedSeller's billingName and id", () => {
    const managedSeller = {
      id: '123',
      billingName: 'Example Billing Name',
    } as unknown as ManagedSeller;
    const label = createTenantLabel(managedSeller);

    expect(label).toEqual('Example Billing Name - 123');
  });

  it("should return the managedSeller's id if they don't have a billingName", () => {
    const managedSeller = {
      id: '123',
      billingName: '',
    } as unknown as ManagedSeller;
    const label = createTenantLabel(managedSeller);

    expect(label).toEqual('123');
  });
});
