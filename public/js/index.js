const nameInputEl = $("#hero-name-input");
const healthInputEl = $("#hero-health-input");

$("#create-hero").click(() => {
    if (nameInputEl.val() === "" || healthInputEl.val() === "") {
        alert("You must enter a name and a number for you health");
        return;
    }

})

function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + ',' + event.target.getAttribute('data-hero'));
}

function drag_over(event) {
    event.preventDefault();
    return false;
}

function drop(event) {
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dm = document.getElementsByClassName('hero');
    dm[parseInt(offset[2])].style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    dm[parseInt(offset[2])].style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    console.log(event.clientX, event.clientY);
    console.log(dm[parseInt(offset[2])].id);
    socket.emit('moveCharacter', {
        id: dm[parseInt(offset[2])].id,
        x: event.clientX,
        y: event.clientY,
        offset: offset
    })
    return false;
}

var dm = document.getElementsByClassName('hero');
for (var i = 0; i < dm.length; i++) {
    dm[i].addEventListener('dragstart', drag_start, false);
    document.body.addEventListener('dragover', drag_over, false);
    document.body.addEventListener('drop', drop, false);
}