
var parent = document.documentElement.innerHTML;

function saveToLocalStorage (elem){
  localStorage.setItem ('task', JSON.stringify(elem));
  // const html = parent.outerHTML; //или целиком parent.outerHTML
   localStorage.setItem('hiDen', parent);
};

function removeFromLocalStorage (elem){
  localStorage.removeItem (elem);
};

export {saveToLocalStorage, removeFromLocalStorage}

