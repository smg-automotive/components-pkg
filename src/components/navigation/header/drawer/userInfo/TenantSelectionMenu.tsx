import React, { FC, useState } from 'react';
import type { EnrichedSessionUser } from '@smg-automotive/auth';

import { NavigationTenantMenuContent } from 'src/components/navigation/header/navigationTenantMenu/Content';
import { MobileOnlyAccordionPanel } from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionPanel';
import { MobileOnlyAccordionItem } from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionItem';
import { MobileOnlyAccordionButton } from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionButton';
import { MobileOnlyAccordion } from 'src/components/mobileOnlyAccordion';
import { Box } from 'src/components/box';

import { SelectedTenantInfo } from './SelectedTenantInfo';

type ManagedSeller = EnrichedSessionUser['managedSellers'][number];

type Props = {
  user: EnrichedSessionUser;
  selectedTenant: ManagedSeller;
  selectTenant: (sellerId: number | string) => Promise<void>;
};

export const TenantSelectionMenu: FC<Props> = ({
  user,
  selectedTenant,
  selectTenant,
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  return (
    <MobileOnlyAccordion
      multiple={true}
      collapsible={true}
      value={expandedItems}
      onValueChange={(details) => setExpandedItems(details.value)}
    >
      <MobileOnlyAccordionItem
        value="tenant-selection"
        style={{ borderTop: 'none', borderBottom: '1px solid #CFCFCF' }}
      >
        <MobileOnlyAccordionButton data-testid="tenant-selection-accordion-toggle">
          <SelectedTenantInfo selectedTenant={selectedTenant} />
        </MobileOnlyAccordionButton>
        <Box
          as={MobileOnlyAccordionPanel}
          position="relative"
          data-testid="tenant-selection-accordion-panel"
        >
          <NavigationTenantMenuContent
            user={user}
            onClose={() => setExpandedItems([])}
            selectedTenantId={selectedTenant.id}
            selectTenant={selectTenant}
          />
        </Box>
      </MobileOnlyAccordionItem>
    </MobileOnlyAccordion>
  );
};
