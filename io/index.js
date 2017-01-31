
/**
 * Debug.io
 * 
 * https://www.npmjs.com/package/colors
 * http://socket.io/docs/server-api
 * 
 */

var io = require('socket.io')(8080);
var mySpace = io.of('/hamed-space/');

mySpace.on('connection', function (socket) {
    socket.on('log', function (x, y) {
        console.log(x, y)
    })
})
