const { spawn } = require('child_process')
const cp = require('child_process')
const chalk = require('chalk')
const { promisify } = require('util')
const exec = promisify(cp.exec).bind(cp)

spawn('bash', [], {
  stdio: ['inherit', 'inherit', 'inherit', 'ipc']
})

console.log(chalk.green('Terminal is Ready!'))
