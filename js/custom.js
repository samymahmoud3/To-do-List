const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

//to add new task
function addTask() {
    if (inputBox.value === '') {
        alert('Please  Write something');
    }
    else {
        let li = document.createElement('li');//create element li
        li.innerHTML = inputBox.value; //insert value to li element
        listContainer.appendChild(li);//insert li into ul list
        let span = document.createElement('span');
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';//clear inputBox
    saveData();
}

//to delete task or checked it
listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle("checked") //checked tasks
        saveData();
    }
    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove(); //remove task
        saveData();
    }
},false);

//to save data and not delete by refresh or close the browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML) //save data in variable localStorage
}

//to can show data if refresh or close the browser
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data"); //get data from variable localStorage
}
showTask();