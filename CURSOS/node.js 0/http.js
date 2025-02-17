const http = require('node:http')

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req,res) => {
    res.setHeader('content-type', 'text/html; charset=utf-8')
    if (req.url === '/') {
    res.end('hola jhoer aprendien do eee')
    } else if (req.url === '/contacto'){
        res.end('contacto')

    }else {
        res.statusCode = 404
       
        res.end('error 404 ...')
    }


}



const server = http.createServer(processRequest)




server.listen(desiredPort, ()=>{
    console.log(`corriendo en http://localhost:${desiredPort}`)
})