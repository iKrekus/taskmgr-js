function removeTaskBtn (task) {
task.querySelector('.btn__remove').addEventListener('click', function(){
  this.closest('LI').remove();
  });
}

export {removeTaskBtn};