const path = require('node:path')

//barra separadora de carpetas segun os
console.log(path.sep)

//unir rutas con path.join
const filepath = path.join('car', 'les','del')

console.log(filepath)

const base = path.basename('/luz/lipo-li/cart.txt')
console.log(base)