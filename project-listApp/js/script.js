const $ = (x) => document.querySelector(x);
let localData = () => localStorage.getItem('notes');

// load localStorage onload
if(localData()) JSON.parse(localData()).forEach((data) => dataToHtml(data));

// function to show data to list element
function dataToHtml(data) {
  const ul = $('ul.list-group');
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
    
    e.preventDefault();
  }
)

// delete multiple element
$('.btn-sm').addEventListener('click',
  (e) => {
    // remove from localStorage
    localStorage.removeItem('notes');
    // remove list element
    Array.from($('ul.list-group').children).forEach((el) => el.remove());
    e.preventDefault();
  }
)