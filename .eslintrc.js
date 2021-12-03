const path = require('path')

module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [ '@typescript-eslint', 'react', 'prettier' ],
	extends: [
		'plugin:@typescript-eslint/recommended'
	],
	parserOptions: {
		project: path.resolve(__dirname, './tsconfig.json'),
		tsconfigRootDir: __dirname,
		ecmaVersion: 2021,
		sourceType: 'module',
		ecmaFeatures: {
            jsx: true
        }
	},
	env: {
		browser: true,
		es6: true
	},
	rules: {
		'no-console': 1,
		'semi' : [ 2, 'always' ],
		'indent': [ 'error' , 4 ],
		'key-spacing': 'error',
		'eol-last': 'error',
		'no-multiple-empty-lines': 'error',
		'@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
		'react/no-direct-mutation-state': 'off',
        'react/no-deprecated': 'off',
        'react/no-string-refs': 'off',
        'react/require-render-return': 'off',
		'react/prop-types': 'off',
		'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.jsx', '.tsx'] }
        ],
	},
	ignorePatterns: [
		'dist',
		'node_modules',
		'webpack.*'
	],
	settings: {
        react: {
            version: 'detect'
        }
    }
}