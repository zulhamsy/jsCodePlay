const http = new HttpRequest;

$('button[type="submit"').addEventListener('click', async function (e) {
  e.preventDefault();

  const text = $('input').value;

  if (text) {
    // fetch data from github
    const data = await http.getData(text);
    // display data to UI
    UI.displayProfile(data.profile);
    // display repo to UI
    UI.displayRepo(data.repo);
  } else {
    // hide result
    UI.resetDisplay();
  }
})