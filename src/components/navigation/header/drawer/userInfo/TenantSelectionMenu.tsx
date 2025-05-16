import React, { FC, useState } from 'react';
import type { EnrichedSessionUser, ManagedSeller } from '@smg-automotive/auth';

import NavigationTenantMenuContent from 'src/components/navigation/header/navigationTenantMenu/Content';
import MobileOnlyAccordionPanel from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionPanel';
import MobileOnlyAccordionItem from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionItem';
import MobileOnlyAccordionButton from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionButton';
import MobileOnlyAccordion from 'src/components/mobileOnlyAccordion';
import Box from 'src/components/box';

import SelectedTenantInfo from './SelectedTenantInfo';

type Props = {
  user: EnrichedSessionUser;
  selectedTenant: ManagedSeller;
  selectTenant: (sellerId: number | string) => Promise<void>;
};

const TenantSelectionMenu: FC<Props> = ({
  user,
  selectedTenant,
  selectTenant,
}) => {
  const [index, setIndex] = useState<number[] | number>([]);

  return (
    <MobileOnlyAccordion index={index} allowMultiple={true} onChange={setIndex}>
      <MobileOnlyAccordionItem border="none">
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
            onClose={() => setIndex([])}
            selectedTenantId={selectedTenant.id}
            selectTenant={selectTenant}
          />
        </Box>
      </MobileOnlyAccordionItem>
    </MobileOnlyAccordion>
  );
};

export default TenantSelectionMenu;
