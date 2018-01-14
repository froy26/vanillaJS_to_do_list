function updateUIWithNewTask(_newTaskName){

    var countainer = document.getElementsByClassName('task_countainer');
    var divToAdd = document.createElement('div');
	var checkboxToAdd = document.createElement("input");
	var textboxToAdd = document.createElement("input");

    divToAdd.className = 'UITask';

    checkboxToAdd.className = 'cbIsDone';
    checkboxToAdd.type = 'checkbox';
    checkboxToAdd.id = 'cb' + _newTaskName;
    checkboxToAdd.onchange = function() {ToggleTaskStatus();};
    checkboxToAdd.onfocus =  function() {SaveTaskName(this);};

    textboxToAdd.className = 'txtTask';
    textboxToAdd.id = 'task' + _newTaskName;
	textboxToAdd.type = 'text';
    textboxToAdd.value = _newTaskName;
    textboxToAdd.onfocus = function() {SaveTaskName(this)};
    textboxToAdd.onblur = function() {ModifyTask()};

    divToAdd.appendChild(checkboxToAdd);
	divToAdd.appendChild(textboxToAdd);
    countainer[0].appendChild(divToAdd);

    document.getElementsByClassName('task_name_field')[0].value = '';
}


function updateTaskLeftCounter(_newTaskNumber){
    if(_newTaskNumber > 1){
        document.getElementById('lblRemainingTasks').innerHTML = _newTaskNumber + ' tasks left';
    }else{
        document.getElementById('lblRemainingTasks').innerHTML = _newTaskNumber + ' task left';
    }
}

function DeleteAllTasksFromUI(){
    var UITasks = document.getElementsByClassName('UITask');
    var UITaskContainer = document.getElementsByClassName('task_countainer')[0];

    var numberOfUITasks = UITasks.length;

    for(i = 0; i < numberOfUITasks; i++){
        UITaskContainer.removeChild(UITasks[0]);
    }
}

function DeleteTaskFromUI(_taskName){
    var taskToDelete = document.getElementById('task' + _taskName);

    document.getElementsByClassName('task_countainer')[0].removeChild(taskToDelete.parentNode);
}