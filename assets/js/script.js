saveBtnEl = document.getElementById("#eight");
taskEl = $("task").value;

var saveTask = function() {
    localStorage.getItem("task item", taskEl);
};

saveBtnEl.addEventListener("click", saveTask); 