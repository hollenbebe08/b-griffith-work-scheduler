// Variables
var timeContainer = document.querySelector(".container");
tasks = {};


//set current day
var today = moment().format("MMMM Do YYYY");
//append the current day to the jumbotron
$("#currentDay").append(today);


//get date from jumbotron
var date = today
//convert to moment object at 5:00pm and set current time
var now = moment(date, "L").set("hour", 17);

// to see if the time is current function
var currentTime = function(){
    if(moment().isAfter(now)){
        hourEl8.addClass("form-control future");
        console.log(hourEl8);
    }
}


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


// saveTask function
var saveTask = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

var loadTask = function(){
    tasks = JSON.parse(localStorage.getItem("tasks"));

    //if there are no tasks in storage...
    if(!tasks){
        tasks = {
            AM_8: [],
            AM_9: [],
            AM_10: [],
            AM_11: [],
            PM_12: [],
            PM_1: [],
            PM_2: [],
            PM_3: [],
            PM_4: [],
            PM_5: [],
        }
    }
};

loadTask();


