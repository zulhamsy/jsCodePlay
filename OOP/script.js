let a = 'text';

// akan error karena string tidak punya method forEach
// a.forEach((e) => console.log(e));

// tapi kita bisa pinjam dari methodnya Array dengan method call
Array.prototype.forEach.call(a, (e) => console.log(e));

// contoh lain penggunaan call method
let obj1 = {
  name: 'Kawasaki'
};

function printName() {
  console.log(`Your motor is ${this.name}`);
}

printName.call(obj1);
// sehingga bisa disimpulkan bahwa call akan memanggil fungsi dengan mengganti this context sesuai dengan argumen this yang diberikan