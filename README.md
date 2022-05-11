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


## Release a new version

New versions are released on the ci using semantic-release as soon as you merge into master. Please
make sure your merge commit message adheres to the corresponding conventions.
