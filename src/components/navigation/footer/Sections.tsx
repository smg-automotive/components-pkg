import React, { FC } from 'react';

import { useI18n } from 'src/utilities/i18nInit';
import { chunkArray } from 'src/utilities/chunkArray';
import useMediaQuery from 'src/hooks/useMediaQuery';
import { MobileOnlyAccordionPanel } from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionPanel';
import { MobileOnlyAccordionItem } from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionItem';
import { MobileOnlyAccordionButton } from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionButton';
import { MobileOnlyAccordion } from 'src/components/mobileOnlyAccordion';
import { ListItem } from 'src/components/list';
import { ListRoot } from 'src/components/list';
import { GridItem } from 'src/components/grid';

import { FooterLink } from './Link';
import { FooterConfigInstance } from './config/factory';

interface FooterSectionsProps {
  config: FooterConfigInstance;
}

export const FooterSections: FC<FooterSectionsProps> = ({ config }) => {
  const { t } = useI18n();
  const sectionChunks = chunkArray({
    array: config.sections,
    chunkSize: 2,
  });

  const isAboveMd = useMediaQuery({ above: 'md' });

  return (
    <>
      {sectionChunks.map((sectionChunk, chunkIndex) => {
        return (
          <GridItem key={`footerGridItem-${chunkIndex}`}>
            <MobileOnlyAccordion multiple={true} variant="dark">
              {sectionChunk.map((sectionConfig, sectionIndex) => {
                return (
                  <MobileOnlyAccordionItem
                    key={`footerSection-${chunkIndex}-${sectionIndex}`}
                    borderTop="none"
                    borderBottom="1px"
                    marginBottom={isAboveMd ? 'lg' : '0'}
                    borderBottomColor="gray.700"
                    value={`footerSection-${chunkIndex}-${sectionIndex}`}
                  >
                    <MobileOnlyAccordionButton>
                      {sectionConfig.title[0].translationKey &&
                        t(sectionConfig.title[0].translationKey)}
                    </MobileOnlyAccordionButton>
                    <MobileOnlyAccordionPanel>
                      <ListRoot size="sm">
                        {sectionConfig.items.map((item, itemIndex) => {
                          return (
                            <ListItem
                              key={`footerListItem-${chunkIndex}-${sectionIndex}-${itemIndex}`}
                            >
                              <FooterLink linkInstance={item} />
                            </ListItem>
                          );
                        })}
                      </ListRoot>
                    </MobileOnlyAccordionPanel>
                  </MobileOnlyAccordionItem>
                );
              })}
            </MobileOnlyAccordion>
          </GridItem>
        );
      })}
    </>
  );
};
