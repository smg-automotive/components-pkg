import { vehicleReferenceRecipe as vehicleReference } from './vehicleReference';
import { tooltipSlotRecipe as tooltip } from './tooltip';
import { tableRecipe as table } from './table';
import { switchRecipe } from './switch';
import { simpleHeaderRecipe as simpleHeader } from './simpleHeader';
import { selectSlotRecipe as select } from './select';
import { sectionRecipe as section } from './section';
import { markedTextRecipe as markedText } from './markedText';
import { listRecipe as list } from './list';
import { inputSlotRecipe as input } from './input';
import { fieldSlotRecipe as field } from './field';
import { energyLabelRecipe as energyLabel } from './energyLabel';
import { dialogFilterRecipe as dialogFilter } from './dialogFilter';
import { dialogRecipe as dialog } from './dialog';
import { checkboxRecipe as checkbox } from './checkbox';
import { cardRecipe as card } from './card';
import { articleTeaserRecipe as articleTeaser } from './articleTeaser';
import { alertRecipe as alert } from './alert';
import { accordionRecipe as accordion } from './accordion';

export const slotRecipes = {
  articleTeaser,
  accordion,
  card,
  energyLabel,
  list,
  markedText,
  dialog,
  simpleHeader,
  table,
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
};
