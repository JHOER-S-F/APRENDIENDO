import { platform, release, arch, cpus, uptime } from 'node:os'

console.log('informacion del sistema operativo')
console.log('_____________________')
console.log('nombre', platform())
console.log('vercion', release())
console.log('arquitectura', arch())
console.log('CPUs', cpus())
console.log('uptime', uptime() /60/60)