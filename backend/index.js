const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server,
    {cors: {
        origin : 'http://localhost:3000',
        methods : ['GET','POST']
    }});
io.on('connection',(socket)=>{
    // console.log('User connected sucefylly')
    socket.on('chat-message',(msg)=>{
        // console.log(msg);
        socket.broadcast.emit('broadcast',msg);
    })
});
server.listen(5000);