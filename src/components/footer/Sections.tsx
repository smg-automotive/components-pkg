import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';

import FooterLink from './Link';
import { FooterConfigInstance } from './config/factory';
import MobileOnlyAccordionPanel from '../mobileOnlyAccordion/MobileOnlyAccordionPanel';
import MobileOnlyAccordionItem from '../mobileOnlyAccordion/MobileOnlyAccordionItem';
import MobileOnlyAccordionButton from '../mobileOnlyAccordion/MobileOnlyAccordionButton';
import MobileOnlyAccordion from '../mobileOnlyAccordion';
import ListItem from '../list/ListItem';
import List from '../list';

import GridItem from '../grid/GridItem';

interface FooterSectionsProps {
  config: FooterConfigInstance;
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const chunkArray = <ArrayType extends unknown>({
  array,
  chunkSize,
}: {
  array: ArrayType[];
  chunkSize: number;
}): ArrayType[][] => {
  const chunks = [];

  for (let i = 0; i < array.length; i = i + chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }

  return chunks;
};

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
                      {t(sectionConfig.title[0].translationKey)}
                    </MobileOnlyAccordionButton>
                    <MobileOnlyAccordionPanel>
                      <List variant="sm">
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
