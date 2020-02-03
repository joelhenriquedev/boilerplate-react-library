module.exports = {
  preset: "ts-jest",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js",
    ".+\\.(css|styl|less|sass|scss)$": "<rootDir>/node_modules/jest-css-modules-transform"
  },
  globals: {
    "ts-jest": {
      diagnostics: false
    }
  },
  //testRegex: "/__tests__/.*\\.test.(ts|tsx)$",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/setupTests.ts"],
  collectCoverage: true,
  transformIgnorePatterns: ["/node_modules"],
  //collectCoverageFrom: ["app/react/**/*.{ts,tsx}", "!app/react/__tests__/api/api-test-helpers.ts"]
}; 