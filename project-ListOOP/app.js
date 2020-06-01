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
    // add item to tr
    tr.innerHTML = `
      <th scope="row">1</th> 
      <td>${item.title}</td>
      <td>${item.assigner}</td>
      <td>${item.category}</td>
      <td><a href="#" class="del">delete</a></td >
      `;
    table.appendChild(tr)
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
    div.className = `alert alert-${status}`;
    div.appendChild(document.createTextNode(message));
    // append div to page
    $('.container').appendChild(div);
  }
}

// Event Listener
$('form').addEventListener('submit',
  (e) => {
    const title = $('#issue').value,
          category = $('#category').value,
          assigner = $('#assigner').value;
    // instantiate issue
    const issue = new Issue(title, category, assigner);
    
    // instantiate ui
    const ui = new UI;
    
    // validation
    if(title == '' || category == '' || assigner == '') {
      ui.showAlert('Cek fieldnya dulu', 'danger');
    } else {
      // add data to table
      ui.addToTable(issue);
   
      // clear fields
      ui.clearFields();
    }
    
    e.preventDefault();
  }
);

$('tbody').addEventListener('click',
  (e) => {
    const row = e.target.parentElement.parentElement;
    if(e.target.classList.contains("del")) row.remove();
    e.preventDefault();
  }
);