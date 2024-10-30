import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';

import { chunkArray } from 'src/utilities/chunkArray';

import MobileOnlyAccordionPanel from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionPanel';
import MobileOnlyAccordionItem from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionItem';
import MobileOnlyAccordionButton from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionButton';
import MobileOnlyAccordion from 'src/components/mobileOnlyAccordion';
import ListItem from 'src/components/list/ListItem';
import List from 'src/components/list';

import GridItem from 'src/components/grid/GridItem';

import FooterLink from './Link';
import { FooterConfigInstance } from './config/factory';

interface FooterSectionsProps {
  config: FooterConfigInstance;
}

const FooterSections: FC<FooterSectionsProps> = ({ config }) => {
  const { t } = useI18n();
  const sectionChunks = chunkArray({
    array: config.sections,
    chunkSize: 2,
  });

  return (
    <>
      {sectionChunks.map((sectionChunk, chunkIndex) => {
        return (
          <GridItem key={`footerGridItem-${chunkIndex}`}>
            <MobileOnlyAccordion allowMultiple={true} variant="dark">
              {sectionChunk.map((sectionConfig, sectionIndex) => {
                return (
                  <MobileOnlyAccordionItem
                    key={`footerSection-${chunkIndex}-${sectionIndex}`}
                    borderTop="none"
                    borderBottomWidth="1px"
                    borderBottomColor="gray.700"
                  >
                    <MobileOnlyAccordionButton>
                      {sectionConfig.title[0].translationKey &&
                        t(sectionConfig.title[0].translationKey)}
                    </MobileOnlyAccordionButton>
                    <MobileOnlyAccordionPanel>
                      <List size="sm">
                        {sectionConfig.items.map((item, itemIndex) => {
                          return (
                            <ListItem
                              key={`footerListItem-${chunkIndex}-${sectionIndex}-${itemIndex}`}
                            >
                              <FooterLink linkInstance={item} />
                            </ListItem>
                          );
                        })}
                      </List>
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

export default FooterSections;
