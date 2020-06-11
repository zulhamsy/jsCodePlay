const http = new EasyHTTP;

// const result = http.get('https://jsonplaceholder.typicode.com/posts');

// console.log(result); // it just doesn't work, karena result di print sebelum nilainya direturn / ingat ASYNCHRONOUS process.

http.get('https://jsonplaceholder.typicode.com/posts',
    function (posts) {
        console.log(posts);
    }
)