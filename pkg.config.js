import { terser } from 'rollup-plugin-terser';
import jsx from 'acorn-jsx';
import postcss from 'rollup-plugin-postcss';
import esbuild from 'rollup-plugin-esbuild';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import less from 'less';
import pkg from './package.json'

const processLess = function (context, payload) {
  return new Promise((resolve, reject) => {
    less.render(
      {
        file: context,
      },
      function (err, result) {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );

    less.render(context, {}).then(
      function (output) {
        // output.css = string of css
        // output.map = string of sourcemap
        // output.imports = array of string filenames of the imports referenced
        if (output && output.css) {
          resolve(output.css);
        } else {
          reject({});
        }
      },
      function (err) {
        reject(err);
      }
    );
  });
};

const extensions = ['ts', 'js', 'tsx'];

export default {
  input: 'src/components/index.ts',
  output: [
    {
      globals: { vue: 'Vue' },
      name: 'bar',
      file: pkg.module,
      format: 'esm',
      plugins: [terser()],
    },
    {
      globals: { vue: 'Vue' },
      name: 'bar',
      file: pkg.main,
      format: 'cjs',
      plugins: [terser()],
    },
  ],
  plugins: [
    typescript({
      lib: ['es5', 'es6', 'dom'],
      target: 'es5', // 输出目标
      noEmitOnError: true, // 运行时是否验证ts错误
      useTsconfigDeclarationDir: true,
    }),
    resolve({ mainFields: ['module', 'main', 'browser'] }),
    commonjs({ extensions, sourceMap: true }),
    babel({ babelHelpers: 'bundled', extensions }),
    postcss({
      extract: true,
      minimize: false,
      process: processLess,
      extract: 'index.css', // 输出路径
    }),
    esbuild(),
  ],
  acornInjectPlugins: [jsx()],
  external: ['vue'],
};
