import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import executable from 'rollup-plugin-executable';
import copy from 'rollup-plugin-copy';
import shebang from 'rollup-plugin-add-shebang';
import { dirname, join } from 'path';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';

const dts = require('rollup-plugin-dts').default;

const packageJson = require('./package.json');
const external = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
];
const onwarn = (warning, warn) => {
  if (warning.code === 'CIRCULAR_DEPENDENCY') throw new Error(warning.message);
  warn(warning);
};

const fontsHostedRequire = packageJson.exports[
  './fonts/hosted'
].require.replace(/^.\//, '');
const fontsHostedImport = packageJson.exports['./fonts/hosted'].import.replace(
  /^.\//,
  ''
);

const fontsNextRequire = packageJson.exports['./fonts/next'].require.replace(
  /^.\//,
  ''
);
const fontsNextImport = packageJson.exports['./fonts/next'].import.replace(
  /^.\//,
  ''
);

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        inlineDynamicImports: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      image(),
      json(),
      typescript({
        tsconfig: './tsconfig.build.json',
        compilerOptions: {
          outDir: dirname(packageJson.main),
          declarationDir: join(dirname(packageJson.main), 'types'),
        },
      }),
    ],
    external,
    onwarn,
  },
  {
    input: 'src/index.ts',
    output: [
      {
        dir: dirname(packageJson.module),
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      image(),
      json(),
      typescript({
        tsconfig: './tsconfig.build.json',
        compilerOptions: {
          outDir: dirname(packageJson.module),
          declarationDir: join(dirname(packageJson.module), 'types'),
        },
      }),
      copy({
        targets: [
          {
            src: 'src/assets/**/*',
            dest: 'dist',
          },
        ],
        flatten: false,
      }),
    ],
    external,
    onwarn,
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
  {
    input: 'src/fonts/Hosted.tsx',
    output: [
      {
        file: fontsHostedRequire,
        format: 'cjs',
        sourcemap: true,
        inlineDynamicImports: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      image(),
      json(),
      typescript({
        tsconfig: './tsconfig.build_fonts.json',
        compilerOptions: {
          outDir: dirname(fontsHostedRequire),
          declarationDir: join(dirname(fontsHostedRequire), 'types'),
        },
      }),
    ],
    external,
    onwarn,
  },
  {
    input: 'src/fonts/Hosted.tsx',
    output: [
      {
        dir: dirname(fontsHostedImport),
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src/fonts',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      image(),
      json(),
      typescript({
        tsconfig: './tsconfig.build_fonts.json',
        compilerOptions: {
          outDir: dirname(fontsHostedImport),
          declarationDir: join(dirname(fontsHostedImport), 'types'),
        },
      }),
    ],
    external,
    onwarn,
  },
  {
    input: 'src/fonts/Next.tsx',
    output: [
      {
        file: fontsNextRequire,
        format: 'cjs',
        sourcemap: true,
        inlineDynamicImports: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      image(),
      json(),
      typescript({
        tsconfig: './tsconfig.build_fonts.json',
        compilerOptions: {
          outDir: dirname(fontsNextRequire),
          declarationDir: join(dirname(fontsNextRequire), 'types'),
        },
      }),
    ],
    external,
    onwarn,
  },
  {
    input: 'src/fonts/Next.tsx',
    output: [
      {
        dir: dirname(fontsNextImport),
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src/fonts',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      image(),
      json(),
      typescript({
        tsconfig: './tsconfig.build_fonts.json',
        compilerOptions: {
          outDir: dirname(fontsNextImport),
          declarationDir: join(dirname(fontsNextImport), 'types'),
        },
      }),
    ],
    external,
    onwarn,
  },
  {
    input: 'src/lib/cli/index.ts',
    output: [
      {
        file: packageJson.bin.components,
        sourcemap: false,
        format: 'cjs',
      },
    ],
    plugins: [
      resolve({ preferBuiltins: true }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build_cli.json',
      }),
      shebang({
        include: packageJson.bin.components,
      }),
      executable(),
    ],
    onwarn,
  },
];
