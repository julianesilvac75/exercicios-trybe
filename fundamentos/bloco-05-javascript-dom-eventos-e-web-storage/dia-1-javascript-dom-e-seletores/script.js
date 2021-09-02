let headerContainer = document.getElementById("header-container");
headerContainer.style.backgroundColor = "#2fc18c";

let emergencyTasks = document.getElementsByClassName("emergency-tasks");
emergencyTasks[0].style.backgroundColor = "#eeaeca";

let noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks");
noEmergencyTasks[0].style.backgroundColor = "#8fadda";

let emergencyTitle = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencyTitle.length; index += 1) {
    emergencyTitle[index].style.backgroundColor = "#59072b";
}

let noEmergencyTitle = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < noEmergencyTitle.length; index += 1) {
    noEmergencyTitle[index].style.backgroundColor = "#57494f";
}

let footer = document.getElementById("footer-container");
footer.style.backgroundColor = "#036b52";