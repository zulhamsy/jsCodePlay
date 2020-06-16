const $ = (x) => document.querySelector(x);

$('form').addEventListener('submit',
  async function(e) {
    // prevent default
    e.preventDefault();
    // initiate spinner
    $('#loader').className = 'spinner-border text-primary mb-3 show';
    // get data from API
    let data = await getData(`https://api.diversitydata.io/?fullname=${$('#fname').value}%20${$('#lname').value}`);
    // view data to DOM
    viewData(data);
  }
);

async function getData(url) {
  const response = await fetch(url)
  data = await response.json();
  return data;
}

function viewData(result) {
  //disable spinner
  $('#loader').className = 'spinner-border text-primary mb-3 hidden';
  $('table').className = 'table table-striped show-table'
  $('#name').textContent = result.fullname;
  $('#gender').textContent = result.gender;
  $('#gender-prob').textContent = result["gender probability"];
  $('#ethnic').textContent = result.ethnicity;
  $('#ethnic-prob').textContent = result["ethnicity probability"];
}