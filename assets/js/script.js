// Variables
var timeContainer = document.querySelector(".container");
var tasks = $("#form-control").value;

//Time container to handle the clicking of buttons
timeContainer.onclick = function() {
    //to prevent default behavior of the button
    event.preventDefault();
    //stores elment as a variable
    var element = event.target;
    //if target element is a button
    if(element.nodeName === "BUTTON") {
        saveTask();
    }
};

//saveTask function
var saveTask = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

var loadTask = function(){
    tasks = JSON.parse(localStorage.getItem("tasks"));
};

    //if nothing in localStorage, create a new object to track all task arrays
    // if(!tasks) {
    //     tasks = {
    //     taskName: []
    //     }
    // }
