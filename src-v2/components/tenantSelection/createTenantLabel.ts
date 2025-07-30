import type { ManagedSeller } from '@smg-automotive/auth';

export const createTenantLabel = (managedSeller?: ManagedSeller) => {
  if (!managedSeller) return '';

  const nameWithCity =
    `${managedSeller.billingName || ''} ${managedSeller.billingCity || ''}`.trim();

  if (nameWithCity) {
    return `${nameWithCity} - ${managedSeller.id}`;
  }

  return managedSeller.id.toString();
};
