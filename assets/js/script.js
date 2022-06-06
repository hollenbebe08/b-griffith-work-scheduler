//Variables
// var tasks = {};
// var timeBlock = $(".time-block");
// var currentDay = $("#currentDay");
// var schedule = $(".container");

//set current day
var today = moment().format("MMMM Do YYYY");
$("#currentDay").append(today);

//set current hour
var currentHour = moment().hour();

//add the class colors for the time of day (past, present, future) relative to the task
currentStateOfBlocks = function(timeBlock){
        if(hour === currentHour){
            return "present"
        }
        if(hour < currentHour) {
            return "past"
        }
        if(hour > currentHour) {
            return "future"
        }
};


var scheduler = function (currentStateOfBlocks) {
    var taskHour = Number.parseInt(currentStateOfBlocks.id, 10)
 
    var saveButton = currentStateOfBlocks.querySelector(".saveBtn")

    var taskText = currentStateOfBlocks.querySelector("textarea")

    // var hourState = currentStateOfBlocks(taskHour)

    // taskText.classList.add(hourState)

    //save tasks with a click
    saveButton.addEventListener("click", function () {
        var taskInput = taskText.value
        var saveTasks = localStorage.setItem(taskHour, (taskInput));
    });

    //connnect the corresponding text with the corresponding hour when loaded
    // function loadTask(){
    // tasks = JSON.parse(localStorage.getItem("tasks"));
};

document.querySelectorAll("#schedule>.row").forEach(scheduler);
