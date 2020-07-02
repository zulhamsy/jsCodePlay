// b74f9643647c4dc7aa515931200207
const http = new HtmlRequest;

$('input').addEventListener('keyup',
  async function(e) {
  e.preventDefault();
  
  if(e.keyCode == 13 && e.target.value != ''){
    const input = e.target.value;
    // request to API
    const res = await http.getData(input);
    // display to UI
    UI.displayData(res);
    // store input name to localStorage
    //Storage.store(input);
  } else {
    // show alert
    //UI.showAlert('Please provide city name');
  }
});