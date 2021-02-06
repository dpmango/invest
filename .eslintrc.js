module.exports = {
  extends: 'erb',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./.erb/configs/webpack.config.eslint.js'),
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'no-underscore-dangle': 'off',
    'no-undef': 'off',
    'no-useless-constructor': 'off',
    'no-param-reassign': ['error', { props: false }],
    'prettier/prettier': 'error',
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/camelcase': 0,
    'react/prop-types': 0,
    'react/state-in-constructor': ['error', 'never'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
    'react/jsx-props-no-spreading': ['off'],
    'import/extensions': ['error', 'never'],
    'import/named': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
