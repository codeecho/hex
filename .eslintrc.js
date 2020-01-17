const reactRules = require('./airbnb-react-eslint');

module.exports = {
  parser: 'babel-eslint',
  extends: 'standard',
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: Object.assign({}, reactRules, {
    semi: ['warn', 'always'],
    'comma-dangle': 'off',
    'space-before-function-paren': ['warn', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    'react/sort-comp': 'off',
    'space-before-blocks': 'off',
    'padded-blocks': 'off',
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 0 }],
    'max-len': ['warn', 100],
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-trailing-spaces': 'warn',
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'warn',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js'],
      },
    ],
    'react/require-default-props': ['warn', {
      forbidDefaultForRequired: true,
    }],
    'react/prop-types': ['warn', {
      ignore: [],
      customValidators: [],
      skipUndeclared: false
    }],
    'react/destructuring-assignment': ['warn', 'always'],
    'react/no-unused-state': 'warn',
  })
};
