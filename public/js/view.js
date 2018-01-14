function updateUIWithNewTask(_newTaskName){

    var countainer = document.getElementsByClassName('task_countainer');
    var liToAdd = document.createElement('li');
	var checkboxToAdd = document.createElement("input");
	var textboxToAdd = document.createElement("input");

    liToAdd.className = 'UITask';

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

    liToAdd.appendChild(checkboxToAdd);
	liToAdd.appendChild(textboxToAdd);
    countainer[0].appendChild(liToAdd);

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

        //Decrement number of task left.
    }
}

function DeleteTaskFromUI(_taskName){
    var taskToDelete = document.getElementById('task' + _taskName);

    document.getElementsByClassName('task_countainer')[0].removeChild(taskToDelete.parentNode);
}