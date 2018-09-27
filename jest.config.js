const defaultConfig = require('./lib/defaultConfig')

module.exports = Object.assign({}, defaultConfig, {
  rootDir: '.',
  coveragePathIgnorePatterns: defaultConfig.coveragePathIgnorePatterns.concat(['/es/', '/coverage/'])
})
