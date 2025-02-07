# Migration guide

<!-- TODO: add accurate version numbers here -->
## From chakra-ui v2 to chakra-ui v3

### Global changes in spacing props

Passing objects with side keys as `padding` and `margin` props is no longer supported. For the components where we whitelisted those props - all respective sides are now whitelisted. Use the one prop per side instead.

#### Before

```tsx
<Box margin={{ top: 'sm', left: 'md' }}>I am a box</Box>
```

#### After

```tsx
<Box marginTop="sm" marginLeft="md">I am a box</Box>
```
### Show/Hide component on certain breakpoint

With V3 usage of mediaQueries to hide a component is tied to using combination of 
- Breakpoints token, defined in `src/themes/shared/breakpoints.ts`.

- `hideFrom`, `hideBelow` props which are globally available on components.

Example:
```tsx
<Box hideFrom="md">I am a box</Box>
```

Chakra docs: (Hiding elements-at-breakpoint)[https://chakra-ui.com/docs/styling/responsive-design#hiding-elements-at-breakpoint].

Additional notes: Hiding components using this Chakra feature object is hidden just with `display: none;`.

Integration notes:
- Due to this functionality being avaialable on all components `show` and `hide` is being removed from the repository and it is necessary to remove all usage on projects and replace it with provided functionality.

### Animation and keyframe changes

Animations are now handled through the token system configured in `token/animations.ts` file.

Animation keyframes must be defined in the `token/keyframes.ts` file and only then they can be referenced in the 
animations token which can then further be used in recipes, slots or as component props.

All animations and keyframes are automatically exported to `sharedConfig`.

### Removed props

- `Table.Cell` and `Table.ColumnHeader` no longer accept `isNumeric` prop.

  You can use `textAlign="end"` instead.

  **Reasoning** `isNumeric` was removed from chakra, we decided to not provide a custom implementation.

- `Link` no longer accepts `leftIcon` and `rightIcon` props.

  Pass icons as children instead.

  **Reasoning** We added them as props to apply space. Turns out we can leverage flex layout to achieve the same result and we can therefore simplify the code.

- To use `Link` with NextJs `NextLink` leverage `asChild` prop instead of `as`

  **Reasoning** this way we don't need to add artificial, arbitrary props to `Link` to match the `NextLink` interface.

- `simpleGrid` no longer accepts `spacingX` and `spacingY` props.

  You can use `rowGap` instead of `spacingY`.
  You can use `rowGap: 0` and `gap: {yourValue}` instead of `spacingX`.

### Renamed components

- `Divider` component was renamed to `Separator`, the props stay the same.

### Namespace style components

The following components now use the `namespace` style imports:

- `Table`

#### Before

```tsx
import { Table, Tbody, Tr, Td } from '@smg-automotive/components'

const MyComponent = () => (
  <Table>
    <Tbody>
      <Tr>
        <Td>Cell 1</Td>
        <Td>Cell 2</Td>
      </Tr>
    </Tbody>
  </Table>
)
```

#### After

```tsx
import { Table } from '@smg-automotive/components'

const MyComponent = () => (
  <Table.Root>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell 1</Table.Cell>
        <Table.Cell>Cell 2</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
)
```

### Parent library changes

Refer to [chakra-ui v2 to v3 migration guide](https://chakra-ui.com/docs/features/chakra-ui-v3) for more changes.

### "Unstyled" control in Storybook

`Unstyled` control automatically appears for components which have recipes.
It allows the user see how the component functions without any styling.
In comparison to V2 with V3 migration this is now automatically available.

As discussed in the Enablement Team it is decided that feature is preserved in the migration.
It is not intended for regular usage but rather for implementation of features with known exceptions such as 
components on `/sell/` page.
