function addtask(){


    let Add = document.getElementById("taskInput");

    let task = Add.value.trim();

    if (task === ""){
        alert("Please enter a task.");
        return;
    }



    let listItem = document.createElement("li")

    listItem.textContent=task;
    let taskList = document.getElementById("taskList");
    taskList.appendChild(listItem);

    Add.value = "";


}
