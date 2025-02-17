const fs = require('node:fs')


const stats = fs.statSync('./ar.tex')

console.log(
    stats.isFile(),
    stats.isDirectory(),
)