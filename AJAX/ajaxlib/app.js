const http = new EasyHTTP;

// const result = http.get('https://jsonplaceholder.typicode.com/posts');

// console.log(result); // it just doesn't work, karena result di print sebelum nilainya direturn / ingat ASYNCHRONOUS process.

// GET all posts
// http.get('https://jsonplaceholder.typicode.com/posts',
//     function (posts) {
//         console.log(posts);
//     }
// )

// GET single post (by post id) atau bisa lainnya tergantung routes dari backend
/*
http.get('https://jsonplaceholder.typicode.com/posts/1',
  function(post) {
    console.log(post);
  }
); */

// POST request
/*
const data = {
  title: "New post",
  body: "Pesan ini tidak akan di simpan di server, hanya dikembalikan dengan ID generate baru"
};

http.post('https://jsonplaceholder.typicode.com/posts', data,
  function(post) {
    console.log(post);
  }
); */

// PUT request
// biasanya untuk mengupdate data
const update = {
  title: "New Post Update",
  body: "This post is updated",
};
http.put('https://jsonplaceholder.typicode.com/posts/1', update,
  function(data) {
    console.log(data);
  }
);