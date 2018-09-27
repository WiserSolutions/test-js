#!/usr/bin/env node

const { resolve } = require('path')
const { existsSync } = require('fs')
const { spawnSync } = require('child_process')
const chalk = require('chalk')

const useDefaultConfig = !existsSync(resolve('./jest.config.js'))

console.log(chalk.white.dim('test-js:'), `Launching Jest with ${useDefaultConfig ? 'default' : 'local'} config.\n`) // eslint-disable-line no-console

spawnSync('jest', process.argv.slice(2).concat([ '-c', resolve(__dirname, '../jest.config.js')]), { stdio: 'inherit' })
