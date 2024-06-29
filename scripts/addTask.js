import {removeTaskBtn} from './removeTask.js'
import {saveToLocalStorage} from './LocalStoraje.js'

const taskDateField = document.querySelector('#task-date');
const taskTemperatureField = document.querySelector('#task-temperature');
const taskTitleField = document.querySelector('#task-title');
const taskDescriptionField = document.querySelector('#task-description');
const taskTitle = document.querySelector('.task-mgr__list');
const taskTemplate = document.querySelector('#task-tmpl').content;

function clear(){
  taskDateField.value='';
  taskTemperatureField.value='';
  taskTitleField.value='';
  taskDescriptionField.value='';
};

function createTask () {
  if (taskTitleField.value && taskDescriptionField.value && taskDateField.value && taskTemperatureField.value) {
    const date = taskDateField.value;
    const temperature = taskTemperatureField.value;
    const name = taskTitleField.value;
        const description = taskDescriptionField.value;
    const task = taskTemplate.cloneNode(true);
    task.querySelector('.task-date').textContent = date;
    task.querySelector('.task-temperature').textContent = temperature;
    task.querySelector('.task-title').textContent = name;
    task.querySelector('.task-description').textContent = description;
    removeTaskBtn(task);
    renderTask(task)
    const taskObj = {
      name: name,
      description: description
    }
    saveToLocalStorage(taskObj)
    clear()
  }
};

function renderTask (task) {
  const taskElement = document.createDocumentFragment();
  taskElement.append(task);
  taskTitle.append(taskElement);
}

export {createTask};