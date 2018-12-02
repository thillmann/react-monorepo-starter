module.exports = {
  collectCoverage: true,
  testEnvironment: "node",
  testURL: "http://localhost",
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$"
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web"
  },
  moduleFileExtensions: [
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "web.js",
    "js",
    "web.jsx",
    "jsx",
    "json",
    "node",
    "mjs"
  ]
};
