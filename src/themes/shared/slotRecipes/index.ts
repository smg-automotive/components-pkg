import { vehicleReferenceRecipe as vehicleReference } from './vehicleReference';
import { tableRecipe as table } from './table';
import { simpleHeaderRecipe as simpleHeader } from './simpleHeader';
import { markedTextRecipe as markedText } from './markedText';
import { listRecipe as list } from './list';
import { energyLabelRecipe as energyLabel } from './energyLabel';
import { cardRecipe as card } from './card';
import { articleTeaserRecipe as articleTeaser } from './articleTeaser';

export const slotRecipes = {
  articleTeaser,
  card,
  energyLabel,
  list,
  markedText,
  simpleHeader,
  table,
  vehicleReference,
};
