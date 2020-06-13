class EasyHTTP extends XMLHttpRequest {
  // get request
  get(url, callback) {
    this.open('GET', url, true);

    this.onload = function() {
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

    this.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

    this.onload = function() {
      if (this.status >= 200 && this.status < 300) {
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
  put(url, data, callback) {
    this.open('PUT', url, true);
    
    this.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

    this.onload = function() {
      if (this.status >= 200 && this.status < 300) {
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
  // delete request
}