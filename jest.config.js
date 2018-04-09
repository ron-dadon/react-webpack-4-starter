const conf =  {
  rootDir: __dirname,
  "setupTestFrameworkScriptFile": "<rootDir>/jest.raf-polyfill.js",
  "collectCoverageFrom": [
    "__tests__/**/*.js"
  ],
  "coverageDirectory": "<rootDir>/__coverage__",
  "coverageReporters": ["json", "lcov", "text", "html"],
  "testMatch": [
    "<rootDir>/__tests__/**/?(*.)(spec|test).js"
  ],
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
  },
  testPathIgnorePatterns: [
    '<rootDir>/__mocks__/',
    '<rootDir>/__coverage__/',
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/src/'
  ],
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.js$"
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/files.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styles.js',
    "^Containers/(.*)$": "<rootDir>/src/Containers/$1",
    "^Components/(.*)$": "<rootDir>/src/Components/$1",
    "^Actions/(.*)$": "<rootDir>/src/Redux/Actions/$1",
    "^Reducers/(.*)$": "<rootDir>/src/Redux/Reducers/$1",
    "^Utilities/(.*)$": "<rootDir>/src/Utilities/$1"
  },
  moduleDirectories: ['node_modules', 'src']
}

module.exports = conf
