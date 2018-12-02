module.exports = {
  preset: "../../jest.config.js",
  setupFiles: ["../../config/polyfills.js"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!**/*.d.ts"],
  coverageDirectory: "../../coverage/apps/my-app/",
  transform: {
    // "^.+\\.(js|jsx|mjs)$": "../../node_modules/babel-jest",
    "^.+\\.tsx?$": "../../node_modules/ts-jest",
    "^.+\\.css$": "../../config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)": "../../config/jest/fileTransform.js"
  },
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.(j|t)s?(x)",
    "<rootDir>/src/**/?(*.)(spec|test).(j|t)s?(x)"
  ],
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.test.json"
    }
  }
};
