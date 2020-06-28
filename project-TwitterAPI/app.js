const http = new HttpRequest;

$('button[type="submit"').addEventListener('click', async function(e) {
  e.preventDefault();

  const text = $('input').value;

  if (text) {
    // fetch data from github
    const profile = await http.getData(text);
    // display data to UI
    UI.displayProfile(profile);
  } else {
    // hide result
    UI.resetDisplay();
  }
})