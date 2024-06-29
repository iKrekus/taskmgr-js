function getCurrentDate () {
  document.addEventListener('DOMContentLoaded', function(){
    let today  = new Date();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let dateField = document.querySelector('#task-date')
    dateField.value = day + "-" + month + "-" + year;
    console.log(today);
  });
}

export {getCurrentDate}