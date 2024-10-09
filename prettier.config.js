/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  importOrder: [
    "^(react/(.*)$)|^(react$)", // React-related imports
    "<THIRD_PARTY_MODULES>", // External dependencies (e.g., lodash, axios)
    "^src/", // Project files
    "^@/", // Aliases
    "^\\./",
    "^\\.."
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: [
    "typescript",
    "jsx",
    "decorators-legacy",
    "classProperties",
    "classPrivateProperties",
    "classPrivateMethods"
  ]
};
