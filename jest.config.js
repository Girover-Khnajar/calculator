module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',  // Runs tests in Node.js (no browser)
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: ['**/test/**/*.spec.ts'], // Matches all .spec.ts inside test/
};

