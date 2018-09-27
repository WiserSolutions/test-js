#!/usr/bin/env node

const { resolve } = require('path')
const { existsSync } = require('fs')
const { spawnSync } = require('child_process')
const chalk = require('chalk')

const useDefaultConfig = !existsSync(resolve('./jest.config.js'))
const defaultConfigPath = resolve(__dirname, 'defaultConfig.js')

console.log(chalk.white.dim('test-js:'), `Launching Jest with ${useDefaultConfig ? 'default' : 'local'} config.\n`) // eslint-disable-line no-console

const additionalArgs = useDefaultConfig ? ['-c', defaultConfigPath] : []
const { status } = spawnSync('jest', process.argv.slice(2).concat(additionalArgs), {
  cwd: resolve('./'),
  stdio: 'inherit'
})
process.exit(status)
