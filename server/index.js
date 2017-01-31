import SocketIO from 'socket.io'

const socket = new SocketIO(8080)

let mySpace = socket.of('/hamed-space/')

mySpace.on('connection', function (socket) {
    socket.on('log', function (x, y) {
        console.log(x, y)
    })
})
