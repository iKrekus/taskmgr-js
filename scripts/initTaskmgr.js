import {createTask} from './addTask.js';

const buttonAdd = document.querySelector('#btn-add');

function initTaskmgr () {
  buttonAdd.addEventListener('click', (createTask))
};

/date time length fix/

export {initTaskmgr};
