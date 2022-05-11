# components-pkg

[![CircleCI](https://circleci.com/gh/smg-automotive/components-pkg/tree/main.svg?style=svg)](https://circleci.com/gh/smg-automotive/components-pkg/tree/main)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Usage
```
npm install @smg-automotive/example
```

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

We leverage [a theming addon](https://storybook.js.org/addons/@react-theming/storybook-addon) in storybook. It allows us to use bottom bar to switch themes.

<!-- TEMP: delete after storybook 6.5 is released -->
## Caveats

Due to using a pre-release version of storybook we need to install dependencies with legacy peer dependency resolution:

```bash
$ npm install --legacy-peer-deps
```
Otherwise we wouldn't be able to use anything depending on storybook (e.g. addons) since they would error out on invalid peer dependencies (i.e. `6.5.0-beta.8` does not satisfy `^6.0.0` constraint).

We expect storybook `6.5.0` to be released soon so this is temporary inconvenience.

## Release a new version

New versions are released on the ci using semantic-release as soon as you merge into master. Please
make sure your merge commit message adheres to the corresponding conventions.
