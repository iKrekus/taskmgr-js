const taskTitleField = document.querySelector('#task-title');
const taskDescriptionField = document.querySelector('#task-description');
const buttonAdd = document.querySelector('#btn-add');
const taskTitle = document.querySelector('.task-mgr__list');
const taskTemplate = document.querySelector('#task-tmpl').content;

buttonAdd.addEventListener('click', function () {
  if (taskTitleField.value && taskDescriptionField.value) {
  createTask(taskTitleField.value, taskDescriptionField.value);
  clear();
  }

})

function clear(){
  taskTitleField.value='';
  taskDescriptionField.value='';
};


function createTask (name, description) {
  const task = taskTemplate.cloneNode(true);
  task.querySelector('.task-title').textContent = name;
  task.querySelector('.task-description').textContent = description;
  renderTask(task)
}

function renderTask (elem) {
  const taskElement = document.createDocumentFragment();
  taskElement.append(elem);
  taskElement.querySelector('.btn__remove').addEventListener('click', function() {
    taskElement.remove();
  })
  taskTitle.append(taskElement);
}

// function addTask (element) {
//   const task = document.createElement('li')
//   task.innerHTML = `
//     <span>${taskTitleField.value}<span>
//     <span>${taskDescriptionField.value}<span>`;
//   tasksList.appendChild(task)
// }
