const { Server } = require("socket.io")
const { createServer } = require("node:http")
const express = require("express")
const path = require("path")

const app = express()
const server = createServer(app)
const io = new Server(server)

app.get("/" , (req, res)=>{
    res.sendFile(path.join(__dirname , "index.html"))
})

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(3001 , ()=>{
    console.log("server is running on port 3001")
})