module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    require.resolve('@operarius/vue-eslint-config'),
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': ["error", "as-needed"],
    'no-param-reassign': ["error", { "props": false }]
  },
  // settings: {
  //   'import/resolver': {
  //     webpack: {
  //       config: 'build/webpack/base.js'
  //     }
  //   }
  // },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
