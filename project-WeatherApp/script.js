// b74f9643647c4dc7aa515931200207
const http = new HtmlRequest;
const ui = new UI;

$('input').addEventListener('keyup',
  async function(e) {
  e.preventDefault();
  
  if(e.keyCode == 13 && e.target.value != ''){
    const input = e.target.value;
    // request to API
    const res = await http.getData(input);
    // error handling
    if(res.error) {
      UI.showAlert(res.error.message, input);
      return;
    }
    // display to UI
    ui.displayData(res);
    // store input name to localStorage
    //Storage.store(input);
  }
});