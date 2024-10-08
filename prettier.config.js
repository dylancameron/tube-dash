/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "",
    "^(src/(.*)$)|^(\\./)",
    "^[^.]",
    "^\\.",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: [
    "typescript",
    "jsx",
    "decorators-legacy",
    "classProperties",
    "classPrivateProperties",
    "classPrivateMethods",
  ],
};
