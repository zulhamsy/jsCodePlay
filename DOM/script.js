const $ = (x) => document.querySelector(x);
const $$ = (x)=> document.querySelectorAll(x);

// remove single li element
$('.collection').addEventListener('click',
  (e) => {
    if(e.target.classList.contains('fa-remove')) {
      // remove li element
      e.target.parentElement.parentElement.remove();
    }
  }
)

// remove all li element (clear button)
$('.clear-tasks').addEventListener('click',
  (e) => {
    // selectorAll result a frozen list, jadi harus di iterate
    $$('.collection-item').forEach((el) => el.remove());
    e.preventDefault();
  }
)

// form submit event
$('form').addEventListener('submit',
  (e) => {
    let value = $('input').value;
    let notes;
    // kalo di localstorage belom ada maka buat array kosong lalu masukkan nilai value
    if(localStorage.getItem('notes') == null) {
      notes = [];
      // kalo udah ada notes maka langsung di parse ke object lalu masukkan nilai value
    } else {
      notes = JSON.parse(localStorage.getItem('notes'));
    }
    notes.push(value);
    // masukkan notes (object) dengan nilai yang sudah di stringfy
    localStorage.setItem('notes',JSON.stringify(notes));

    // add to list item
    viewData(value);

    // clear input field after submitted
    $('form').reset();
    e.preventDefault();
  }
)

// load data from localStorage
let datas = JSON.parse(localStorage.getItem('notes'));
datas.forEach((data) => viewData(data));

function viewData(data) {
  const li = document.createElement('li');
  const anc = document.createElement('a');
  // create li item
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(data));

  // create anchor tag
  anc.className = 'delete-item secondary-content';
  anc.setAttribute('href', '#');
  anc.innerHTML = '<i class="fa fa-remove"></i>';

  // append anchor tag to li item
  li.appendChild(anc);

  // add li to ul
  $('ul.collection').appendChild(li);
}