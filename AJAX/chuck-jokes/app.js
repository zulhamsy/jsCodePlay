const $ = (x) => document.querySelector(x);

// event listener
$('form').addEventListener('submit',
    (e) => {
        let num = $('#numjokes').value;
        // const xhr = new XMLHttpRequest;
        console.log(num);
        // open request
        // xhr.open('GET', 'http://api.icndb.com/jokes/random/')

        e.preventDefault()
    }
);