const $ = (x) => document.querySelector(x);

// Issue Class
class Issue {
  constructor(title,category,assigner) {
    this.title = title;
    this.category = category;
    this.assigner = assigner;
  }
}
// UI Class
class UI {
  // add item to table
  addToTable(item) {
    // table body
    const table = $('tbody');
    // create tr
    const tr = document.createElement('tr');
    // tr class
    tr.className = 'item';
    // add item to tr
    tr.innerHTML = `
      <th scope="row">#</th> 
      <td>${item.title}</td>
      <td>${item.assigner}</td>
      <td>${item.category}</td>
      <td><a href="#" class="del">delete</a></td >
      `;
    //table.appendChild(tr)
    if(table.children.length == 0) {
      table.appendChild(tr);
    } else {
      $('tr.item').before(tr);
    }
  }
  
  // clear field
  clearFields() {
    $('#issue').value = '';
    $('#category').value = '';
    $('#assigner').value = '';
  }
  
  // alert
  showAlert(message, status) {
    let div = document.createElement('div');
    div.className = `alert alert-${status} mt-3`;
    div.appendChild(document.createTextNode(message));
    // append div to page
    $('form').before(div);
    // clear after 1.5s
    setTimeout(()=> $('.alert').remove(), 1500);
  }
}
// LocalStorage Class
class Storage {
  static getItem() {
    let items;
    if(!localStorage.getItem('items')) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
  }
  
  static addItem(issue) {
    let items = Storage.getItem();
    items.push(issue);
    localStorage.setItem('items', JSON.stringify(items));
  }
  
  static removeItem(value) {
    let items = Storage.getItem();
    items.forEach((item, index) => {
      if(item.title == value) items.splice(index, 1);
    });
    localStorage.setItem('items', JSON.stringify(items));
  }
}

const ui = new UI;

// Event Listener
window.addEventListener('DOMContentLoaded',
  () => {
    Storage.getItem().forEach((item) => {
      ui.addToTable(item);
    });
  }
);

$('form').addEventListener('submit',
  (e) => {
    const title = $('#issue').value,
          category = $('#category').value,
          assigner = $('#assigner').value;
    // instantiate issue
    const issue = new Issue(title, category, assigner);
    
    // validation
    if(title == '' || category == '' || assigner == '') {
      ui.showAlert('Cek fieldnya dulu', 'danger');
    } else {
      // add data to table
      ui.addToTable(issue);
      
      // add to LocalStorage
      Storage.addItem(issue);
   
      // clear fields
      ui.clearFields();
    }
    
    e.preventDefault();
  }
);

$('tbody').addEventListener('click',
  (e) => {
    const row = e.target.parentElement.parentElement;
    if(e.target.classList.contains("del")) {
      // remove from LS
      Storage.removeItem(row.children[1].textContent);
      // remove from DOM
      row.remove();
      // show alert
      ui.showAlert('Data berhasil dihapus', 'success');
    }
    e.preventDefault();
  }
);