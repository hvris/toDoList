function endTask() {
document.getElementsByClassName('task')[0].style.textDecoration = 'line-through';
}
function removeTask() {
document.removeChild.getElementsByClassName('X')[0];
}
function addTask() {
    
    let taskText = document.getElementsByName('task')[0].value;
    
    let table = document.querySelector('table');
    let tr = document.createElement('tr');
    let tdX = document.createElement('td');
    let tdTask = document.createElement('td');
    tdTask.setAttribute('onclick', 'endTask()');
    tdX.setAttribute('onclick', 'removeTask()');
    tdTask.classList = ('task');
    tdX.classList = ('X');

    tdX.innerText = '✘';
    tdTask.innerText = taskText;

    if (taskText == ''){
        alert("Your input can't be empty");
    }

    else {
        table.appendChild(tr);
        tr.appendChild(tdTask);
        tr.appendChild(tdX);
    }

}
