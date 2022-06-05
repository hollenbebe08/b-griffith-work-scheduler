//Variables
var tasks = [];
var timeBlock = $(".time-block");

//set current day
var today = moment().format("MMMM Do YYYY");
$("#currentDay").append(today);

//set current hour
var currentHour = moment().hour();

//setup the timeblock
timeBlock.each(function(){
    var currentBlock = $(this);
    var taskHour = parseInt($(currentBlock).attr("id"));

    var taskObj = {
        hour: taskHour,
        text: ""
    }
    
    //add item to tasks array
    tasks.push(taskObj);
});


// // Time container to handle the clicking of buttons
// var timeContainer.onclick = function() {
//     //to prevent default behavior of the button
//     event.preventDefault();
//     //stores elment as a variable
//     var element = event.target;
//     //if target element is a button
//     if(element.nodeName === "BUTTON") {
//         saveTask()
//     }
// };


// // saveTask function
// var saveTask = function() {
//     localStorage.setItem("tasks", JSON.stringify());
// };


