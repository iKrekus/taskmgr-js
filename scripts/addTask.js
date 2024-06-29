import {removeTaskBtn} from './removeTask.js'
import {saveToLocalStorage} from './LocalStoraje.js'

const taskTitleField = document.querySelector('#task-title');
const taskDescriptionField = document.querySelector('#task-description');
const taskTitle = document.querySelector('.task-mgr__list');
const taskTemplate = document.querySelector('#task-tmpl').content;

function clear(){
  taskTitleField.value='';
  taskDescriptionField.value='';
};

function createTask () {
  if (taskTitleField.value && taskDescriptionField.value) {
    const name = taskTitleField.value;
    const description = taskDescriptionField.value;
    const task = taskTemplate.cloneNode(true);
    task.querySelector('.task-title').textContent = name;
    task.querySelector('.task-description').textContent = description;
    removeTaskBtn(task);
    renderTask(task)
    const taskObj = {
      name: name,
      description: description
    }
    saveToLocalStorage(taskObj)
  }
};

function renderTask (task) {
  const taskElement = document.createDocumentFragment();
  taskElement.append(task);
  taskTitle.append(taskElement);
}

export {createTask, clear};