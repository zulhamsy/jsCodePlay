let arr = [1,2,3,4,5,6];

// push method - menambah element ke akhir array
arr.push(7,8); // [1,2,3,4,5,6,7,8]

// pop method - menghapus element di akhir array
arr.pop(); // [1,2,3,4,5,6,7]

// unshift method - menambah element ke awal array
arr.unshift(0); // [0,1,2,3,4,5,6,7]

// shift method - menghapus element di awal array
arr.shift(); // [1,2,3,4,5,6,7]


// Search through array, method berikut juga berlaku untuk string type

// indexOf method - mencari index dari suatu element dimulai dari awal array
arr.indexOf(4); // output: 3

// lastIndexOf method - sama tapi dicari dari akhir array
arr.lastIndexOf(5); // output: 4

// slice method - potong2 array
arr.slice(3); // output: [4,5,6,7]

// concat
arr.concat(arr.slice(5)); 
  // output [1,2,3,4,5,6,7,6,7]
  
// indexOf pada string, dapat mencari lebih dari satu char
let string = 'Zulham';
string.indexOf('ham'); // output: 3
string.indexOf('hem'); // output: -1


// Destructuring / binding contents
function arrLookup(array) {
  return `your name is ${array[0]} and ${array[1]} years old`;
}

// cara tsb bisa dibuat simple jika kita tau nilai / elemen mana yang digunakan dalam sebuah fungsi
function newArrLook([name, age]) {
  return `your name is ${name} and ${age} years old`;
}

// berlaku juga untuk object, var, let, const
let {name} = {
  name: 'Zulham',
  age: 25
}

console.log(name); // output: Zulham