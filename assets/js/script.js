//set current day
var today = moment().format("MMMM Do YYYY");
$("#currentDay").append(today);

//set current hour
var currentHour = moment().hour();

//checking to see if the current hour has passed or not
var stateOfCurrentHour = function(hour){
    if (hour < currentHour)
    console.log(past);
}

// var setCurrentHours = function(current){
//     console.log(current);

//     var currentHour = Number.parseInt(current, 10);
//     // console.log(currentHour);
// }


//Time container to handle the clicking of buttons
// timeContainer.onclick = function() {
//     //to prevent default behavior of the button
//     event.preventDefault();
//     //stores elment as a variable
//     var element = event.target;
//     //if target element is a button
//     if(element.nodeName === "BUTTON") {
//         saveTask();
//     }
// };


// saveTask function
// var saveTask = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// };


