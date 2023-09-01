var taskList = [];
var newtask = "";
var looptask = "";
var tasknum = 0;

function addtoTaskList(){
    looptask = "";

    newtask = document.getElementById("todoInput").value; 
    taskList.push(newtask);
    
    addtoDisplay();
}

function addtoDisplay(){

    for (let i=0; i< taskList.length; i++){
        looptask += i + taskList[i] + ", ";
    }

    createNewTask();
}






// TASK BOX
function createNewTask(){
    const newtask = document.createElement("div");

    uniqueID = "testID" + tasknum;

    newtask.setAttribute("id",uniqueID);
    newtask.classList.add("todoNewTask");
    
    document.getElementById("todoTest").appendChild(newtask);

    createCheckbox();
}
// TASK CHECKBOX
function createCheckbox(){
    const newcheckbox = document.createElement("input");
    newcheckbox.type = "checkbox"
    newcheckbox.classList.add("todoCcheckbox");

    document.body.querySelector("#"+uniqueID).appendChild(newcheckbox);

    createTaskName();
}
// TASK TEXT
function createTaskName(){
    const newtaskname = document.createElement("p");
    
    var newtasknameID = "IDtaskname" + tasknum;
    newtaskname.setAttribute("id",newtasknameID);
    console.log(newtasknameID);

    newtaskname.innerText = document.getElementById("todoInput").value;
    newtaskname.classList.add("todoCtaskname");

    document.body.querySelector("#"+uniqueID).appendChild(newtaskname);
    
    createTaskBtn();
}
// TASK BUTTON
function createTaskBtn() {
    const newtaskbtn = document.createElement("button");
    
    var newtaskbtnID = "IDtaskbtn" + tasknum;
    newtaskbtn.setAttribute("id",newtaskbtnID);
    console.log(newtaskbtnID);
    
    newtaskbtn.setAttribute("onclick","test()");
    newtaskbtn.classList.add("todoTaskBtn");
    newtaskbtn.innerText = "Delete";
    
    document.getElementById("todoTest").appendChild(newtaskbtn);

    tasknum += 1;

    document.getElementById("todoInput").value = "";
}






























// TASK BOX
//function createNewTask(){
    //const newtask = document.createElement("div");
    //newtask.classList.add("todoNewTask");
    
    //document.getElementById("todoTest").appendChild(newtask);

    //createCheckbox();
//}
// TASK CHECKBOX
//function createCheckbox(){
    //const newcheckbox = document.createElement("input");
    //newcheckbox.type = "checkbox"
    //newcheckbox.classList.add("todoCcheckbox");

    //document.body.querySelector(".todoNewTask").appendChild(newcheckbox);

    //createTaskName();
//}
// TASK TEXT
//function createTaskName(){
    //const newtaskname = document.createElement("p");

    //newtaskname.innerText = document.getElementById("todoInput").value;
    //newtaskname.classList.add("todoCcheckbox");

    //document.body.querySelector(".todoNewTask").appendChild(newtaskname);
    
    //createTaskBtn();
//}
// TASK BUTTON
//function createTaskBtn() {
    //const newtaskbtn = document.createElement("button");
    //newtaskbtn.classList.add("todoTaskBtn");
    //newtaskbtn.innerText = "Delete";
    
    //document.getElementById("todoTest").appendChild(newtaskbtn);
//}
