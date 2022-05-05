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

## Release a new version

New versions are released on the ci using semantic-release as soon as you merge into master. Please
make sure your merge commit message adheres to the corresponding conventions.
