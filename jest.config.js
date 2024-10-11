module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./jestSetup.js'],
  moduleNameMapper: {
    '\\.(lottie)$': '<rootDir>/jest/__mocks__/lottieMock.js',
  },
};
