const xhr = new XMLHttpRequest;

console.log(this); // this merujuk pada window object

xhr.onload = function() {
    console.log(this.status); // this disini merujuk pada object xhr karena property onload yang berada di dalam object XHR. ex:
    /* xhr {
        status : ...
        onload : function() {
            this.status --> merujuk pada property status yang dimiliki xhr object
        }
    }
    */
}