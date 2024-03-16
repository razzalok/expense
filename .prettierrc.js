module.exports = {
  "eslintConfig": {
    "arrowParens": "avoid",
    "bracketSameLine": true,
    "bracketSpacing": false,
    "singleQuote": true,
    "trailingComma": "es5",
    "overrides": [
      {
        "files": "*.{js,ts}",
        "options": {
          "semi": false
        }
      }
    ]
  }
}
