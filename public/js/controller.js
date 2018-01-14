var onFocusTaskName = '';

function AddNewTask(){

	var newTaskName = document.getElementsByClassName('task_name_field')[0].value;

	if(newTaskName.length !== 0 && newTaskName[0] !== ' '){
		var newTask = CreateTask(newTaskName);
		AddTaskToList(newTask);
	}
	else{
		alert('You need to enter a name before creating a task.');
	}
}

function ModifyTask(){
	var taskTextField = document.getElementById('task' + onFocusTaskName);
	var modifiedTaskName = taskTextField.value;

	ModifyTaskInList(onFocusTaskName, modifiedTaskName);
}


function SaveTaskName(/*_taskTextField*/_eventCaller){
	if(_eventCaller.type === 'text'){
		onFocusTaskName = _eventCaller.value;
	}
	else{
		onFocusTaskName = document.getElementById('task' + _eventCaller.id.substring(2)).value;
	}
}

function ToggleTaskStatus(){
	var taskCheckbox = document.getElementById('cb' + onFocusTaskName);

	ToggleTaskStatusInList(onFocusTaskName);
}

function DeleteAllTasks(){
	DeleteAllTasksFromList();
}

function DeleteAllDoneTasks(){
	DeleteAllDoneTaskFromList();
}