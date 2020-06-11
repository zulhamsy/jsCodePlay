class EasyHTTP extends XMLHttpRequest {
    // get request
    get(url, callback) {
        this.open('GET', url, true);

        this.onload = function () {
            if (this.status == 200) {
                callback(this.responseText);
            } else {
                callback(`Error : ${this.statusText}`);
            }
        };

        this.send();
    }
    // post request
    // put request
    // delete request
}