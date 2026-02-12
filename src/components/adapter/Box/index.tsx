import React from 'react';

import { Box as BoxComponents, BoxProps } from 'src/components/box';

type ElementType = React.ElementType;
type PropsOf<E extends ElementType> = React.ComponentPropsWithoutRef<E>;

type PolymorphicProps<
  E extends ElementType,
  OwnProps extends object,
> = OwnProps & { as?: E } & Omit<
    PropsOf<E>,
    keyof OwnProps | 'as' | 'children'
  >;

/** Strict JSON-ish style object types (no `any`) */
type JSONPrimitive = string | number | boolean | null;
type JSONValue = JSONPrimitive | JSONArray | JSONObject;
type JSONArray = ReadonlyArray<JSONValue>;
interface JSONObject {
  [key: string]: JSONValue;
}

function isPlainObject(v: unknown): v is JSONObject {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

type AliasMapValue = string | readonly [string, ...string[]];

/**
 * Expand Chakra v2 sx shorthands to real CSS keys.
 * Extend this map as you discover more cases in your codebase.
 */
const aliasToCssMap: Record<string, AliasMapValue> = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],

  mx: ['marginLeft', 'marginRight'],
  my: ['marginTop', 'marginBottom'],
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom'],

  pl: 'paddingLeft',
  pr: 'paddingRight',
  pt: 'paddingTop',
  pb: 'paddingBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
  mt: 'marginTop',
  mb: 'marginBottom',

  rounded: 'borderRadius',
};

function mergeObjects(a: JSONObject, b: JSONObject): JSONObject {
  const out: JSONObject = { ...a };
  for (const k of Object.keys(b)) {
    const av = out[k];
    const bv = b[k];
    if (isPlainObject(av) && isPlainObject(bv)) out[k] = mergeObjects(av, bv);
    else out[k] = bv;
  }
  return out;
}

/** Map v2 underscore keys to selectors (no _dark/_light) */
const pseudoMap: Record<string, string> = {
  _hover: '&:hover',
  _active: '&:active',
  _focus: '&:focus',
  _focusWithin: '&:focus-within',
  _focusVisible: '&:focus-visible',
  _visited: '&:visited',

  _disabled: '&:disabled, &[aria-disabled=true], &[data-disabled]',
  _invalid: '&:invalid, &[aria-invalid=true], &[data-invalid]',
  _required: '&:required',
  _readOnly: '&:read-only, &[aria-readonly=true], &[data-readonly]',

  _before: '&::before',
  _after: '&::after',
  _placeholder: '&::placeholder',
  _selection: '&::selection',
};

/**
 * Convert Chakra v2 `sx` into Chakra v3-friendly `css`.
 * - expands Chakra aliases (paddingY, marginX, etc.)
 * - maps pseudo keys (_hover, _before, _groupHover...) to selectors
 * - preserves at-rules and explicit selectors, recursing into nested objects
 */
// eslint-disable-next-line sonarjs/cognitive-complexity
function transformSxToCss(sx?: JSONObject): JSONObject | undefined {
  if (!sx) return undefined;

  const out: JSONObject = {};

  for (const key of Object.keys(sx)) {
    const val = sx[key];

    // Preserve at-rules and explicit selectors (but recurse)
    const isAtRule = key.startsWith('@');
    const isSelectorLike =
      key.startsWith('&') ||
      key.includes(' ') ||
      key.includes('>') ||
      key.includes(':') ||
      key.includes('.') ||
      key === 'ul' ||
      key === 'ol' ||
      key === 'li' ||
      key === 'article';

    if (isAtRule || isSelectorLike) {
      out[key] = isPlainObject(val)
        ? (transformSxToCss(val as JSONObject) as JSONValue)
        : val;
      continue;
    }

    // Pseudo keys
    if (key.startsWith('_')) {
      const mappedSelector = pseudoMap[key];
      if (mappedSelector) {
        const nested = isPlainObject(val)
          ? transformSxToCss(val as JSONObject)
          : undefined;

        const valueToAssign: JSONValue = nested ? nested : (val as JSONValue);

        const prev = out[mappedSelector];
        if (isPlainObject(prev) && isPlainObject(valueToAssign)) {
          out[mappedSelector] = mergeObjects(prev, valueToAssign as JSONObject);
        } else {
          out[mappedSelector] = valueToAssign;
        }
        continue;
      }

      // Unknown underscore key: keep as-is (but recurse if object)
      out[key] = isPlainObject(val)
        ? (transformSxToCss(val as JSONObject) as JSONValue)
        : val;
      continue;
    }

    // Alias expansion
    const mapped = aliasToCssMap[key];
    if (mapped) {
      if (Array.isArray(mapped)) {
        for (const realKey of mapped) out[realKey] = val;
      } else {
        out[mapped as string] = val;
      }
      continue;
    }

    // Recurse for nested objects, otherwise copy
    out[key] = isPlainObject(val)
      ? (transformSxToCss(val as JSONObject) as JSONValue)
      : val;
  }

  return out;
}

/** Public adapter props:
 * - do NOT expose `css` (compat layer is sx-only)
 * - keep textColor/spacing mappings
 */
type Props = Omit<BoxProps, 'color' | 'gap' | 'css'> & {
  textColor?: BoxProps['color'];
  spacing?: BoxProps['gap'];
  sx?: JSONObject;
};

export type BoxAdapterProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  Props
>;

export const Box = React.forwardRef(function BoxAdapter<
  E extends ElementType = 'div',
>(props: BoxAdapterProps<E>, ref: React.ForwardedRef<unknown>) {
  const { as, textColor, spacing, color, sx, children, ...rest } = props;

  const cssFromSx = transformSxToCss(sx);

  // helper: only add css if sx was provided
  const cssProp = cssFromSx
    ? ({ css: cssFromSx } as unknown as Pick<BoxProps, 'css'>)
    : undefined;

  if (!as) {
    return (
      <BoxComponents
        {...rest}
        {...(color ? { color } : {})}
        {...(textColor ? { color: textColor } : {})}
        {...(spacing ? { gap: spacing } : {})}
        {...(cssProp ?? {})}
        ref={ref}
      >
        {children}
      </BoxComponents>
    );
  }

  const AsComp = as as ElementType; // relies on your existing approach

  return (
    <BoxComponents {...rest} {...(cssProp ?? {})} asChild ref={ref}>
      <AsComp>{children}</AsComp>
    </BoxComponents>
  );
}) as <E extends ElementType = 'div'>(
  props: BoxAdapterProps<E> & { ref?: React.Ref<HTMLElement> },
) => React.ReactElement | null;
