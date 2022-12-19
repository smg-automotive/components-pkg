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

## Theming

As agreed upon in the [RFC](https://github.com/smg-automotive/au-docs/discussions/3) we will handle the differences between AS24 and MS24 with two different themes. They can be then used via a theme provider that needs to wrap the application:

```tsx
// app.tsx
import { ThemeProvider } from '@smg-automotive/components';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme="as24">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
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
