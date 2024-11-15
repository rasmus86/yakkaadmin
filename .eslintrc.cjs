module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/strongly-recommended',
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended',
        '@vue/typescript/recommended',
        '@vue/eslint-config-typescript',
        'plugin:import/typescript',
        'plugin:import/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        sourceType: 'module',
        extraFileExtensions: [
            '.vue',
        ],
    },
    plugins: [
        '@typescript-eslint',
        'prettier',
        'import',
    ],
    settings: {
        'import/resolver': {
            typescript: {},
            alias: {
                map: [
                    ['@', './src'],
                ],
            },
            node: {
                'paths': ['./src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
            },
        },
    },
    rules: {
        'no-console': process.env.VITE_APP_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.VITE_APP_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],
        'operator-linebreak': ['error', 'after'],
        'object-curly-newline': 'off',
        'func-call-spacing': 'off',
        'vue/require-default-prop': 'off',
        'import/prefer-default-export': 'off',
        'vue/no-multiple-template-root': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        "@typescript-eslint/indent": 'off',
        'implicit-arrow-linebreak': 'off',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
};
