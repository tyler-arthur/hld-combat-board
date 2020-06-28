const express = require('express');
const app = express();

let server = require('http').Server(app);
let io = require('socket.io')(server);
require('./sockets/sockets.js')(io)

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});
