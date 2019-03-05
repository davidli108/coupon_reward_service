module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
  ],
  setupFiles: [
    '<rootDir>/config/polyfills.js',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/config/setupTests.js',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}',
    '<rootDir>/stories/**/?(*.)(spec|test).{js,jsx,mjs}',
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$'              : '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$'                       : '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)' : '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$',
  ],
  moduleNameMapper: {
    '@components/(.*)$' : '<rootDir>/src/components/$1',
    '@config/(.*)$'     : '<rootDir>/src/config/$1',
    '@graphql/(.*)$'    : '<rootDir>/src/graphql/$1',
    '@modules/(.*)$'    : '<rootDir>/src/modules/$1',
    '@services/(.*)$'   : '<rootDir>/src/services/$1',
    '@store/(.*)$'      : '<rootDir>/src/store/$1',
    '@theme$'           : '<rootDir>/src/theme/index.js',
    '@theme/(.*)$'      : '<rootDir>/src/theme/$1',
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
    'mjs',
  ],
};
