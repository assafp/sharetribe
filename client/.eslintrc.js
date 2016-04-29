module.exports = {

  // This makes sure ESLint doesn't traverse the directory tree
  // upwards to find more .eslintrc.* files outside the project
  // directory that might affect the linting results.
  root: true,

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    impliedStrict: true,
    jsx: true,
    experimentalObjectRestSpread: true,
  },
  plugins: [
    'react',
    'babel',
    'import',
    'jsx-a11y',
  ],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    // See http://eslint.org/docs/rules/ for documentation for
    // specific rules and their options.
    //
    // 0 = off
    // 1 = warn
    // 2 = error

    // ESLint built-in 'Possible Errors' rules
    'comma-dangle': [2, 'always-multiline'],


    // ESLint built-in 'Best Practices' rules
    'array-callback-return': 2,
    'consistent-return': 2,
    'curly': [2, 'all'],
    'default-case': 2,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    'eqeqeq': [2, 'smart'],
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-function': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': [2, {
      allow: ['!!'],
    }],
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-magic-numbers': [1, {
      ignore: [0, 1, -1],
      ignoreArrayIndexes: true,
      enforceConst: true
    }],
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': [2, {props: true}],
    'no-proto': 2,
    'no-redeclare': [2, {builtinGlobals: true}],
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-void': 2,
    'no-warning-comments': 1,
    'no-with': 2,
    'radix': 2,
    'wrap-iife': 2,
    'yoda': 2,

    // ESLint built-in 'Strict Mode' rules
    'strict': 2,

    // ESLint built-in 'Variables' rules
    'init-declarations': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-use-before-define': 2,

    // ESLint built-in 'Stylistic Issues' rules
    // TODO



    // ESLint built-in 'ECMAScript 6' rules
    // TODO



    // TODO: React plugin rules
    'react/no-danger': 0,    // TODO: remove
    'react/display-name': 0, // TODO: remove

    // TODO: Babel plugin rules

    // TODO: Import plugin rules

    // TODO: jsx-a11y plugin rules
  }
};
