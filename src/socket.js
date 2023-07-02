import http from 'http'
import { Server } from 'socket.io'

export function createSeverSocket(app) {
    const server = http.createServer(app)
    const io = new Server(server)

    return io
}
