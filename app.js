const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.static('public'));
// server code goes here!
// first listen for connection using io.on
io.on('connection', function(socket){
    console.log('made a connection', socket.id);
    socket.on('advance player 1', function(player){
        console.log('advance player 1', player);
        io.sockets.emit('advance player 1', player);
    });
    socket.on('advance player 2', function(player){
        console.log('advance player 2', player);
        io.sockets.emit('advance player 2', player);
    });
});

// then... within callback, use socket.on, socket.emit, socket.broadcast, etc.
// NOTE THAT WE ARE LISTENING WITH server, NOT app!
server.listen(3000);