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
    e.preventDefault();
  }
)