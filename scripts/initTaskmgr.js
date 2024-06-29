import {createTask, clear} from './addTask.js';

const buttonAdd = document.querySelector('#btn-add');

function initTaskmgr () {
  buttonAdd.addEventListener('click', (createTask))
};

export {initTaskmgr};

// localStorage.clear