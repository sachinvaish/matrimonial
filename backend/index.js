const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server,
    {cors: {
        origin : 'https://example.com',
        methods : ['GET','POST']
    }});
io.on('connection',(socket)=>{
    console.log('User connected sucefylly')
    socket.on('chat-message',(msg)=>{
        console.log(msg);
    })
});
server.listen(5000);