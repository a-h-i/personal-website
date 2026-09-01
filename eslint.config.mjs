import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

// eslint-config-next 16 ships flat configs, so these are spread directly. Going
// through @eslint/eslintrc's FlatCompat bridge instead throws
// "Converting circular structure to JSON" on the config's self-referential
// plugin object, which made eslint unrunnable.
const eslintConfig = [
  { ignores: ['.next/**', 'deploy/node_modules/**', 'next-env.d.ts'] },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'always',
        },
      ],
    },
  },
];

export default eslintConfig;
