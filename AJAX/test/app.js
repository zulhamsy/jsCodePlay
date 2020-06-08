document.querySelector('button').addEventListener('click', loadData);

function loadData() {
    // Create XHR Object / API to request data to server
    const xhr = new XMLHttpRequest;

    // Open or make a request
    xhr.open('GET','data.txt', true);

    // selain onload ada juga onprogress yaitu method yang dipanggil ketika readyState == 3, jadi bisa digunakan untuk loader / spinner

    // onload adalah method yang dipanggil ketika API telah selesai melakukan transaksi data / readyState == 4
    // onload adalah method baru, jadi tidak perlu menggunakan onReadyStateChange() lagi, dan tidak perlu mengecek apakah readyStatenya == 4
    xhr.onload = function() {
        // HTTP Status
            // 200 : OK
            // 403 : Forbidden
            // 404 : Page Not Found

        // readyState Value
            // 0 : request not initialized
            // 1 : server conn established
            // 2 : request received
            // 3 : processing request
            // 4 : request finished and response is ready
        if(this.status == 200) {
            document.querySelector('h1').textContent = this.responseText;
            
        }
    }

    // send the request to the server, karena onlaod/onprogress/onerror berjalan dengan asynchronous atau client side
    xhr.send();
}