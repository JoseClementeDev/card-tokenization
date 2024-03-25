module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  cacheDirectory: '.tmp/jestCache',
  testPathIgnorePatterns: [
    '/node_modules',
    '/build'
  ]
}
