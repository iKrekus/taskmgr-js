const taskTitleField = document.querySelector('#task-title');
const taskDescriptionField = document.querySelector('#task-description');
const buttonAdd = document.querySelector('#btn-add');
const taskTitle = document.querySelector('.task-mgr__list');
const taskTemplate = document.querySelector('#task-tmpl');

buttonAdd.addEventListener('click', function () {
  if (taskTitleField.value && taskDescriptionField.value) {
  // addTask();
  createTask(taskTitleField.value, taskDescriptionField.value);
  clear();
  console.log(createTask);
  }

})

function clear(){
  taskTitleField.value='';
  taskDescriptionField.value='';
};


function createTask (name, description) {
  // console.log(taskTemplate);
  const task = taskTemplate.cloneNode(true);
  console.log(task);
  let aa = taskElement.querySelector('.task-title');
  console.log(aa);
  // const taskTitle = task.querySelector('.task-title');
  // const taskDescription = task.querySelector('.task-description');


  // taskTitle.value = name;
  // taskDescription.value = description;

  // return task;
}

function renderTask () {

}

// function addTask (element) {
//   const task = document.createElement('li')
//   task.innerHTML = `
//     <span>${taskTitleField.value}<span>
//     <span>${taskDescriptionField.value}<span>`;
//   tasksList.appendChild(task)
// }
