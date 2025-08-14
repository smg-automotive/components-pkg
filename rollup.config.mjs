import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import executable from 'rollup-plugin-executable';
import dts from 'rollup-plugin-dts';
import copy from 'rollup-plugin-copy';
import shebang from 'rollup-plugin-add-shebang';
import { dirname, join } from 'path';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';

import packageJson from './package.json' with { type: 'json' };

const external = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
];
const onwarn = (warning, warn) => {
  if (warning.code === 'CIRCULAR_DEPENDENCY') {
    if (warning.message.includes('node_modules/yargs')) return;
    throw new Error(warning.message);
  }
  warn(warning);
};

const fontsHostedRequire = packageJson.exports[
  './fonts/hosted'
].require.replace(/^.\//, '');
const fontsHostedImport = packageJson.exports['./fonts/hosted'].import.replace(
  /^.\//,
  '',
);

const resolveOptions = { moduleDirectories: ['.', 'node_modules'] };
const jsPlugins = [
  peerDepsExternal(),
  resolve(resolveOptions),
  commonjs(),
  image(),
  json(),
];

const cjs = {
  input: 'src/index.ts',
  output: [
    {
      dir: dirname(packageJson.main),
      format: 'cjs',
      sourcemap: true,
      inlineDynamicImports: true,
    },
  ],
  plugins: [
    ...jsPlugins,
    typescript({
      tsconfig: './tsconfig.build.json',
      compilerOptions: {
        outDir: dirname(packageJson.main),
      },
    }),
  ],
  external,
  onwarn,
};

const esm = {
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
    ...jsPlugins,
    typescript({
      tsconfig: './tsconfig.build.json',
      compilerOptions: {
        outDir: dirname(packageJson.module),
        declaration: true,
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
};

const types = {
  input: 'src/index.ts',
  output: [{ file: 'dist/index.d.ts', format: 'esm' }],
  plugins: [dts({ tsconfig: './tsconfig.build.json' })],
};

const hostedFontsCjs = {
  input: 'src/fonts/Hosted.tsx',
  output: [
    {
      dir: dirname(fontsHostedRequire),
      format: 'cjs',
      sourcemap: true,
      inlineDynamicImports: true,
    },
  ],
  plugins: [
    ...jsPlugins,
    typescript({
      tsconfig: './tsconfig.build_fonts.json',
      compilerOptions: {
        outDir: dirname(fontsHostedRequire),
        declaration: true,
        declarationDir: join(dirname(fontsHostedRequire), 'types'),
      },
    }),
  ],
  external,
  onwarn,
};

const hostedFontsEsm = {
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
    ...jsPlugins,
    typescript({
      tsconfig: './tsconfig.build_fonts.json',
      compilerOptions: {
        outDir: dirname(fontsHostedImport),
        declaration: true,
        declarationDir: join(dirname(fontsHostedImport), 'types'),
      },
    }),
  ],
  external,
  onwarn,
};

const cli = {
  input: 'src/lib/cli/index.ts',
  output: [
    {
      file: packageJson.bin.components,
      sourcemap: false,
      format: 'cjs',
    },
  ],
  plugins: [
    resolve({
      ...resolveOptions,
      preferBuiltins: true,
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build_cli.json',
      compilerOptions: {
        outDir: dirname(packageJson.bin.components),
      },
    }),
    shebang({
      include: packageJson.bin.components,
    }),
    executable(),
    copy({
      targets: [
        {
          src: 'src/lib/cli/setupNextFonts/template.tsx',
          dest: 'dist/bin',
        },
      ],
    }),
  ],
  onwarn,
};

export default [cjs, esm, types, hostedFontsCjs, hostedFontsEsm, cli];
