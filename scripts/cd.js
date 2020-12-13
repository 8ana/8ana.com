const process = require('process')
const shell = require('shelljs')
shell.cd(`${process.cwd()}/dist/client`).exec('git status').exec('git add .').exec('git commit -m "打包"').exec('git push')
console.log(`Starting directory: ${process.cwd()}`)
