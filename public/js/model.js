//var tasksList = [];
var tasksMap = new Map();
var numberOfTasks = 0;
var numberOfTasksDone = 0;

function CreateTask(_name){
    var task = {
        Name:_name,
        IsDone:false,

        ChangeName: function (_newName) {
            this.Name = _newName;
        },
        ToggleStatus: function () {
            this.IsDone = !this.IsDone;

            if(this.IsDone){
                numberOfTasksDone += 1;
            }
            else{
                numberOfTasksDone -= 1;
            }

            updateTaskLeftCounter(numberOfTasks - numberOfTasksDone);
        }
    };

    return task;
}

function AddTaskToList(_taskToAdd){
    //tasksMap.push(_taskToAdd);
    tasksMap.set(_taskToAdd.Name, _taskToAdd);

    //numberOfTasks = tasksMap.length;
    numberOfTasks = tasksMap.size;

    updateUIWithNewTask(_taskToAdd.Name);

    updateTaskLeftCounter(numberOfTasks - numberOfTasksDone);
}

function ModifyTaskInList(_taskName, _newTaskName){
    var taskToModify = tasksMap.get(_taskName);

    taskToModify.ChangeName(_newTaskName);
}

function ToggleTaskStatusInList(_taskName){
    tasksMap.get(_taskName).ToggleStatus();
}

function DeleteAllTasksFromList(){
    tasksMap.clear();
    updateTaskLeftCounter(0);
    DeleteAllTasksFromUI();
}

function DeleteAllDoneTaskFromList(){
    var tasks = tasksMap.values();
    var taskValue = tasks.next().value;

    while(taskValue !== undefined){
        if(taskValue.IsDone){
            tasksMap.delete(taskValue.Name);
            DeleteTaskFromUI(taskValue.Name);
        }

        taskValue = tasks.next().value;
    }
}