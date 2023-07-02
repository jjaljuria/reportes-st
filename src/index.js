import app from './app.js'
import { createSeverSocket } from './socket.js'

// socket.io no funciona con app sino que necesita un servidor http
const server = createSeverSocket(app)

server.listen(app.get('PORT'), () => {
    console.log(`server running at port ${app.get('PORT')}`)
})
