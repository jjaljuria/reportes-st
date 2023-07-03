import http from 'http'
import { Server } from 'socket.io'

export function createSeverSocket(app) {
    const server = http.createServer(app)

    return server
}

let io = null
export function getIO(server) {
    if (!io && server) {
        io = new Server(server)
    }
    return io
}
