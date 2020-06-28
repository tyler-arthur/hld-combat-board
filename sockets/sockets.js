module.exports = (io) => {

  // array of sprite positions

  const game = io.on('connection', socket => {
    // emit sprite postions
    console.log("sup dawg, welcome to erf");
    socket.emit('connected', "beeep booop");
    socket.broadcast.emit('Main', "welcome to the main room");
    socket.on('moveCharacter', (data) => {
      console.log(data);
      socket.broadcast.emit('characterMove', data);
    });
  });

};