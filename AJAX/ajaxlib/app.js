const http = new EasyHttp;

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
/*
const update = {
  title: "New Post Update",
  body: "This post is updated",
};
http.put('https://jsonplaceholder.typicode.com/posts/1', update,
  function(data) {
    console.log(data);
  }
); */

// DELETE request
/*
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(deleteditem) {
  console.log(deleteditem);
}); */

// http.get('https://reqres.in/api/users',
//   function (response) {
//     response = JSON.parse(response);
//     response.data.forEach(user => {
//       console.log(`${user.first_name} ${user.last_name}`);
//     })
//   }
// );

// using new async
// http.get('https://jsonplaceholder.typicode.com/posts')
//   .then(result => console.log(result));

const data = {
  title: 'New Title',
  body: 'This post is edited'
};

http.delete('https://jsonplaceholder.typicode.com/posts/5')
  .then(result => console.log(result));