const $ = (x) => document.querySelector(x);
let localData = () => localStorage.getItem('notes');

// load localStorage onload
if(localData()) JSON.parse(localData()).forEach((data) => dataToHtml(data));

// function to show data to list element
function dataToHtml(data) {
  const ul = $('ul');
  const li = document.createElement('li');
  const a = '<a href="#" class="badge badge-pill badge-danger">x</a>';
  li.className = 'list-group-item d-flex justify-content-between align-items-center';
  li.appendChild(document.createTextNode(data));
  li.innerHTML += a;
  //console.log(data);
  ul.appendChild(li);
}

// save button
$('form').addEventListener('submit',
  (e) => {
    let text = $('input').value;
    let datas;
    // input to localStorage
    if(!localData()) {
      datas = [];
    } else {
      datas = JSON.parse(localData());
    }
    datas.push(text);
    localStorage.setItem('notes', JSON.stringify(datas));
    // add to html
    dataToHtml(text);
    // clear index
    $('input').value = '';
    // toast notif
    toastr.success('Data added', 'Success');
    // prevent default behavior
    e.preventDefault();
  }
);

// single delete item
$('ul').addEventListener('click',
  (e) => {
    if(e.target.classList.contains('badge')) {
      // remove li elem
      e.target.parentElement.remove();
      // remove from localStorage
      let notes = JSON.parse(localData());
      //console.log(e.target.parentElement.textContent.slice(0,-1));
      notes.splice(notes.indexOf(e.target.parentElement.textContent.slice(0,-1)),1);
      // set to  localStorage
      localStorage.setItem('notes',JSON.stringify(notes));
    }
    // toast notif
    toastr.info(`${e.target.parentElement.textContent.slice(0,-1)} deleted`, 'Deleted');
    e.preventDefault();
  }
);

// delete multiple element
$('.btn-sm').addEventListener('click',
  (e) => {
    // remove from localStorage
    localStorage.removeItem('notes');
    // remove list element
    Array.from($('ul.list-group').children).forEach((el) => el.remove());
    e.preventDefault();
  }
);

// filter event
$('.form-control-sm').addEventListener('input',
  (e) => {
    // get value of list
    let list = document.querySelectorAll('li');
    let text = e.target.value.toLowerCase();
    list.forEach((el) => {
      if(el.textContent.toLowerCase().slice(0,-1).indexOf(text) != -1) {
        el.id = 'flex';
        //console.log(el.style.id);
      } else {
        el.id = 'none';
      }
    });
  }
);

// toast setting
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": true,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "500",
  "timeOut": "2000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};