import React from 'react';

import { useI18n } from '@smg-automotive/i18n-pkg';

import {
  Box,
  Collapsible,
  IconButton,
  useDisclosure,
  useSlotRecipe,
} from '@chakra-ui/react';

import { ChevronDownSmallIcon } from '../icons';
import { Item, Props } from './type';
import { CheckboxWithFacet } from './CheckboxWithFacet';

type CheckboxCollapsibleProps<
  ItemKey extends string,
  FilterName extends string,
> = {
  item: Item<ItemKey, FilterName>;
} & Pick<
  Props<ItemKey, FilterName>,
  'onApply' | 'onToggleCheckboxGroup' | 'alwaysExpanded'
>;

export function CheckboxGroupCollapsibleWithChildren<
  ItemKey extends string,
  FilterName extends string,
>({
  alwaysExpanded = false,
  item,
  onApply,
  onToggleCheckboxGroup,
  ...props
}: CheckboxCollapsibleProps<ItemKey, FilterName>) {
  const recipe = useSlotRecipe({ key: 'checkbox' });
  const [recipeProps] = recipe.splitVariantProps(props);
  const styles = recipe({ ...recipeProps });
  const { open, onToggle } = useDisclosure({ defaultOpen: alwaysExpanded });
  const { t } = useI18n();
  const checkboxes = item.childCheckboxes ?? [];
  const numberOfAppliedChildren = checkboxes.filter(
    (checkbox) => checkbox.isChecked,
  ).length;
  const groupDomId = `checkbox-group-${item.key}-${item.filterName ?? ''}`;

  return (
    <Collapsible.Root open={alwaysExpanded || open}>
      <Box width="full" display="flex" alignItems="center">
        <CheckboxWithFacet
          item={item}
          onApply={onApply}
          aria-expanded={open}
          isIndeterminate={
            numberOfAppliedChildren > 0 &&
            numberOfAppliedChildren < checkboxes.length
          }
          contentRight={
            alwaysExpanded ? null : (
              <Collapsible.Trigger asChild>
                <IconButton
                  aria-controls={groupDomId}
                  aria-expanded={open}
                  aria-label={`${item.label}: ${
                    open
                      ? t('checkboxFilter.expanded')
                      : t('checkboxFilter.collapsed')
                  }`}
                  onClick={() => {
                    onToggle();
                    onToggleCheckboxGroup?.(item);
                  }}
                  w="full"
                  h="sm"
                  display="flex"
                  justifyContent="flex-end"
                >
                  <ChevronDownSmallIcon
                    color="gray.900"
                    transitionDuration="normal"
                    transform={open ? 'rotate(180deg)' : 'rotate(0deg)'}
                    cursor="pointer"
                  />
                </IconButton>
              </Collapsible.Trigger>
            )
          }
        />
      </Box>
      <Collapsible.Content css={styles.content}>
        <Box id={groupDomId} ml={checkboxes.length > 0 ? '2xl' : '0'}>
          {checkboxes?.map((checkbox) => (
            <CheckboxWithFacet
              key={checkbox.key}
              item={{
                ...checkbox,
                // to force checked on children when parent is checked
                isChecked: item.isChecked ? true : checkbox.isChecked,
              }}
              onApply={onApply}
              isIndeterminate={false}
              indentFacet={!alwaysExpanded}
            />
          ))}
        </Box>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
CheckboxGroupCollapsibleWithChildren.displayName =
  'CheckboxGroupCollapsibleWithChildren';
