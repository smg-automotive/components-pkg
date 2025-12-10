import type { EnrichedSessionUser } from '@smg-automotive/auth';

type ManagedSeller = EnrichedSessionUser['managedSellers'][number];

export const createTenantLabel = (managedSeller?: ManagedSeller) => {
  if (!managedSeller) return '';

  const nameWithCity =
    `${managedSeller.billingName || ''} ${managedSeller.billingCity || ''}`.trim();

  if (nameWithCity) {
    return `${nameWithCity} - ${managedSeller.id}`;
  }

  return managedSeller.id.toString();
};
