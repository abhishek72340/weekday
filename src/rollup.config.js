import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/main.jsx", // Entry point of your application

  output: {
    file: "dist/bundle.js", // Output bundle file
    format: "cjs", // CommonJS module format
    sourcemap: true, // Generate source maps
  },

  plugins: [
    // Resolve node_modules dependencies
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),

    // Convert CommonJS modules to ES6, so they can be included in the bundle
    commonjs(),

    // Transpile JSX and modern JavaScript syntax using Babel
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: ["@babel/plugin-transform-runtime"],
    }),
  ],
};
