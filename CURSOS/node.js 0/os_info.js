const os = require('node:os')

console.log('informacion del sistema operativo')
console.log('_____________________')
console.log('nombre', os.platform())
console.log('vercion', os.release())
console.log('arquitectura', os.arch())
console.log('CPUs', os.cpus())
console.log('uptime', os.uptime() /60/60)


