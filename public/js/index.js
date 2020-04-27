const nameInputEl = $("#hero-name-input");
const healthInputEl = $("#hero-health-input");

$("#create-hero").click(() => {
    if (nameInputEl.val() === "" || healthInputEl.val() === "") {
        alert("You must enter a name and a number for you health");
        return;
    }

})



