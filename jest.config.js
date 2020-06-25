module.exports = {
  projects: [
    {
      displayName: 'Client',
      rootDir: '<rootDir>/client',
      preset: 'jest-preset-angular',
      setupTestFrameworkScriptFile: '<rootDir>/setupJest.ts',
      globals: {
        'ts-jest': {
          tsConfig: '<rootDir>/tsconfig.spec.json'
        }
      },
      moduleNameMapper: {
        '^@app/(.*)$': '<rootDir>/src/app/$1',
        '^@env/(.*)$': '<rootDir>/src/environments/$1'
      }
    }
  ]
};
