const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')

const log = console.log
const docsPath = path.join(__dirname, '../docs')
const buildPath = path.join(__dirname, '../build')

log(chalk.red('Deleting') + chalk.yellow(' docs ') + chalk.red('folder...'))
fs.emptyDirSync(docsPath)
log(chalk.green('Deleted') + chalk.yellow(' docs ') + chalk.green('folder'))
log(
  chalk.green('Copying') +
    chalk.yellow(' build ') +
    chalk.green('folder contents into') +
    chalk.yellow(' docs ') +
    chalk.green('folder...')
)
fs.copySync(buildPath, docsPath)
log(
  chalk.green('Copied') +
    chalk.yellow(' build ') +
    chalk.green('folder contents into') +
    chalk.yellow(' docs ') +
    chalk.green('folder')
)
