import app from './app.js'
import { createSeverSocket, getIO } from './socket.js'

// socket.io no funciona con app sino que necesita un servidor http
const server = createSeverSocket(app)
const io = getIO(server)

io.on('connection', socket => {
    console.log('cannected')
    socket.on('solicitud', (form) => {
        console.log(form)
    })
})

server.listen(app.get('PORT'), () => {
    console.log(`server running at port ${app.get('PORT')}`)
})
