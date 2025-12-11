import { vehicleReferenceRecipe as vehicleReference } from './vehicleReference';
import { tooltipSlotRecipe as tooltip } from './tooltip';
import { tabsRecipe as tabs } from './tabs';
import { tableRecipe as table } from './table';
import { switchRecipe } from './switch';
import { sliderSlotRecipe as slider } from './slider';
import { simpleHeaderRecipe as simpleHeader } from './simpleHeader';
import { selectSlotRecipe as select } from './select';
import { sectionRecipe as section } from './section';
import { radioRecipe as radio } from './radio';
import { popoverFilterRecipe as popoverFilter } from './popoverFilter';
import { paginationRecipe as pagination } from './pagination';
import { numberInputRecipe as numberInput } from './numberInput';
import { menuRecipe as menu } from './menu';
import { markedTextRecipe as markedText } from './markedText';
import { listRecipe as list } from './list';
import { inputSlotRecipe as input } from './input';
import { galleryHeaderRecipe as galleryHeader } from './galleryHeader';
import { fieldSlotRecipe as field } from './field';
import { energyLabelRecipe as energyLabel } from './energyLabel';
import { dialogFilterRecipe as dialogFilter } from './dialogFilter';
import { dialogRecipe as dialog } from './dialog';
import { checkboxRecipe as checkbox } from './checkbox';
import { cardRecipe as card } from './card';
import { breadcrumbsRecipe as breadcrumbs } from './breadcrumbs';
import { articleTeaserRecipe as articleTeaser } from './articleTeaser';
import { alertRecipe as alert } from './alert';
import { accordionRecipe as accordion } from './accordion';

export const slotRecipes = {
  articleTeaser,
  accordion,
  breadcrumbs,
  card,
  energyLabel,
  galleryHeader,
  list,
  markedText,
  dialog,
  simpleHeader,
  table,
  tabs,
  vehicleReference,
  tooltip,
  field,
  section,
  checkbox,
  switch: switchRecipe,
  input,
  select,
  dialogFilter,
  alert,
  popoverFilter,
  numberInput,
  radio,
  slider,
  pagination,
  menu,
};
