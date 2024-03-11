const taskTitle = document.querySelector('#task-title');
const taskDescription = document.querySelector('#task-description');
const buttonAdd = document.querySelector('#btn-add');
const tasksList = document.querySelector('.task-mgr__list');

buttonAdd.addEventListener('click', function () {
  if (taskTitle.value && taskDescription.value) {
  addTask();
  clear();
  }

})

function clear(){
  taskTitle.value='';
  taskDescription.value='';
};

function addTask (element) {
  const task = document.createElement('li')
  task.innerHTML = `
    <span>${taskTitle.value}<span>
    <span>${taskDescription.value}<span>`;
  tasksList.appendChild(task)
}
