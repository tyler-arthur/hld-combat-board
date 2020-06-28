const socket = io('http://localhost:3000')

socket.on('connect', () => {
  console.log("howdy");
  socket.on('connected', (data) => {
    console.log(data);
  });
  socket.on('characterMove', data => {
    const el = document.getElementById(data.id);
    el.style.left = (data.x + parseInt(data.offset[0], 10)) + 'px';
    el.style.top = (data.y + parseInt(data.offset[1], 10)) + 'px';
  });
});