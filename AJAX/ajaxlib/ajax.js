class EasyHTTP extends XMLHttpRequest {
    // get request
    get(url, callback) {
        this.open('GET', url, true);

        this.onload = function () {
            if (this.status == 200) {
                callback(this.responseText);
            } else {
                callback({
                    code: this.status,
                    status: this.statusText
                });
            }
        };

        this.send();
    }
    // post request
    post(url, data, callback) {
        this.open('POST', url, true);

        this.setRequestHeader('Content-type', 'application/json');

        this.onload = function () {
            if (this.status == 200) {
                callback(this.responseText);
            } else {
                callback({
                    code: this.status,
                    status: this.statusText
                });
            }
        };

        this.send(JSON.stringify(data));
    }
    // put request
    // delete request
}