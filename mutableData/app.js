// Immutable Data
let someString = 'Javascript';
let otherString = someString;

// change someString
someString = 'React';

// otherString tetep Javascript karena string bersifat immutable, otherString telah di bound dengan value (Javascript)
console.log(someString);
console.log(otherString);
console.log(someString == otherString);

// Mutable Data
let someObject =  {
  name: 'Zulham Syafrawi',
  age: 25
};

let newObject = someObject;

someObject.name = 'Salma Yuliana';
console.log(someObject.name);
// newObject.name akan berubah karena object terbound dengan reference, jika reference berubah maka semua objek yang terikat disitu akan berubah juga
console.log(newObject.name);
console.log(someObject == newObject);