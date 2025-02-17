const http = require('node:http')

const procesoReq = (req, res) =>{
    const {method, url} = req

    switch {method}
    case 'GET':



}


const server = http.createServer(procesoReq)

server.listen(3000, () =>{
    console.log(`corriendo en http://localhost:${server}`)
})
