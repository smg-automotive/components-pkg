import { ManagedSeller } from '@smg-automotive/auth';

export const createTenantLabel = (managedSeller?: ManagedSeller) => {
  if (!managedSeller) return '';

  if (managedSeller.billingName) {
    return `${managedSeller.billingName} - ${managedSeller.id}`;
  }

  return `${managedSeller.id}`;
};
