// let 
let variable = 'abc';

console.log(variable);

// deklarasi dengan let berarti, variable dapat diubah referensinya (sekaligus merubah nilainya)
variable = 'def';
console.log(variable);

// const
const newVariable = 'abc';

// Error karena konstan dari primitive value tidak bisa diubah
// newVariable = 'def';
console.log(newVariable);

const someObject = {
  name: 'Zulham',
  age: 25
};

// someObject properties tetap bisa diganti/ditambah/dihapus karena referensi ke objek terkait / address tetap sama
someObject.name = 'Syafrawi';
console.log(someObject.name);