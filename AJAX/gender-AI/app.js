const $ = (x) => document.querySelector(x);

$('form').addEventListener('submit',
  (e) => {
    const xhr = new XMLHttpRequest;
    // open request
    xhr.open('GET', `https://api.diversitydata.io/?fullname=${$('#fname').value}%20${$('#lname').value}`, true);
    // onprogress
    xhr.onloadstart = function() {
      $('#loader').className = 'spinner-border text-primary show';
    };
    xhr.onprogress = function () {
      $('#loader').className = 'spinner-border text-primary hidden';
    };
    // onload event
    xhr.onload = function() {
      if(this.status == 200) {
        const result = JSON.parse(this.responseText);
        $('table').className = 'table table-striped show-table'
        $('#name').textContent = result.fullname;
        $('#gender').textContent = result.gender;
        $('#gender-prob').textContent = result["gender probability"];
        $('#ethnic').textContent = result.ethnicity;
        $('#ethnic-prob').textContent = result["ethnicity probability"];
      }
    };
    // sent
    xhr.send();
    e.preventDefault();
  }
)