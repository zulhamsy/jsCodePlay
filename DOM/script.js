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