module.exports = {
  plugins: [
    'eslint-plugin-no-inline-styles',
  ],
  extends: [
    'airbnb',
    // 'airbnb/hooks',
    'next/core-web-vitals',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    mocha: true,
  },
  rules: {
    'max-len': [2, { code: 120 }],
    'default-param-last': 0,
    'jsx-a11y/media-has-caption': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-param-reassign': [2, { props: false }],
    'arrow-parens': ['error', 'always'],
    'react/destructuring-assignment': [2, 'never', { ignoreClassFields: true }],
    'react/jsx-no-duplicate-props': [2, { ignoreCase: false }],
    'react/jsx-key': [2, { checkFragmentShorthand: true }],
    'react/no-unsafe': [2, { checkAliases: true }],
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
    'react/no-unstable-nested-components': [
      'warn',
      { allowAsProps: true },
    ],
    'no-inline-styles/no-inline-styles': 2,
    'import/no-anonymous-default-export': 0,
    'react/display-name': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~/public', './public'],
          ['~/modules', './src/modules'],
          ['~/mui', './src/mui'],
          ['~/packages', './src/packages'],
          ['~/outdated', './src/outdated'],
        ],
        extensions: ['.jsx', '.js'],
      },
    },
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
  },
};
