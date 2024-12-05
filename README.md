# components-pkg

[![CircleCI](https://circleci.com/gh/smg-automotive/components-pkg/tree/main.svg?style=svg)](https://circleci.com/gh/smg-automotive/components-pkg/tree/main)
[![Deployment](https://img.shields.io/badge/main-Deployment-yellow)](https://main-components-pkg.branch.autoscout24.dev)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Usage

1. Install the package
   ```sh
   npm install @smg-automotive/components
   ```

2. run the setup script
   ```sh
   npx components setup --path=<path to you public dir>
   ```

   The setup script will:

   - add a `postinstall` script that will copy self hosted fonts to your public directory. They need to be served from `/assets/fonts` to be correctly loaded.
   - add the copied font directory to your `.gitignore`
   - copy the fonts

   Default `path` is `public`, which is the publicly available directory in nextjs projects.

   After `postinstall` script is added fonts will be copied every time you install the dependencies, you don't need to manually copy fonts after updating the components package.

3. Dealing with fonts

   There are three ways of making sure that fonts are loaded:

   - self-hosting fonts and using provided `fonts/hosted` module.

     To leverage it:

     1. Make sure that you're hosting the fonts under `/assets/fonts`
     2. On the top level of your application render the `<Fonts />` component from:

     ```typescript
     import Fonts from '@smg-automotive/components/fonts/hosted'

     const App: () => {
      // ...

      return (<>
       <Fonts />
       <!-- rest of the application -->
      </>)
     }
     ```

     The provided component makes sure that correct `font-face`s are declared

   - using `@next/fonts` to leverage font optimizations from nextjs

     Unfortunately due to technical limitations in how `@next/fonts` are set up we can't provide a module similar to self-hosted fonts. We do the next best thing and provide a component generator. Simply run:

     ```bash
     npx components setup-next-fonts --fonts-path <path-to-which-fonts-were-copied> --component-path <path-to-save-the-component>
     ```

     This will generate the `<Fonts />` component with the `@next/font` configuration ready to use in your project.

   - handling fonts yourself

     You can also deal with the fonts yourself. That means you're responsible for declaring `font-face` and hosting fonts. The only thing that you need to do is to provide a `--font-primary` CSS variable so the components package picks your font declaration up:

     ```CSS
     :root {
        --font-primary: '<your font family name>'
      }
     ```

     We recommend adding fallback font families of `Arial, Helvetica, Sans-Serif`

## Migrating to chakra-ui v3

When migrating to chakra-ui v3, we introduced a set of breaking changes aligning with the parent library. You can get the overview of the changes in our components in the [migration guide](./migration-guide.md)

## Development

```
npm run build
```

You can link your local npm package to integrate it with any local project:

```
cd smg-automotive-components-pkg
npm run build

cd <project directory>
npm link ../smg-automotive-components-pkg
```

### Type generation

Chakra UI provides type generation for tokens. This is incorporated into the `typegen` script.
If you're adding new tokens you will need to re-generate the types:

```bash
$ npm run typegen
```

If you're heavily modifying the theme you can watch the changes with:
```bash
$ npm run typegen:watch
```

Since re-installing chakra ui will clean the generated types we're running the type generation as a post-install script.

## Theming

As agreed upon in the [RFC](https://github.com/smg-automotive/au-docs/discussions/3) we will handle the differences between AS24 and MS24 with two different themes. They can be then used via a theme provider that needs to wrap the application:

```tsx
// app.tsx
import { ThemeProvider } from '@smg-automotive/components';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme="autoscout24">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
```

Theme objects can also be imported directly from the package (for showcasing, debugging, etc.):

```tsx
import { autoScout24Theme } from '@smg-automotive/components';
```

### Switching themes in storybook

We leverage [a theming addon](https://storybook.js.org/addons/storybook-addon-themes#custom-decorator) in storybook.
It allows us to use top bar to switch themes.

## Release a new version

New versions are released on the ci using semantic-release as soon as you merge into master. Please
make sure your merge commit message adheres to the corresponding conventions.
