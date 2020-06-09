const $ = (x) => document.querySelector(x);

// event listener
$('form').addEventListener('submit',
    (e) => {
        let num = $('#numjokes').value;
        const xhr = new XMLHttpRequest;
        // open request
        xhr.open('GET', `http://api.icndb.com/jokes/random/${num}`, true);
        // onload
        xhr.onload = function() {
          if(this.status == 200) {
            const jokes = JSON.parse(this.responseText);
            let result = '';
            jokes['value'].forEach((sjoke) => {
              result += `
                <li>${sjoke.joke}</li>
              `;
            });
            $('ol').innerHTML = result;
          }
        }
        // sent
        xhr.send();

        e.preventDefault()
    }
);