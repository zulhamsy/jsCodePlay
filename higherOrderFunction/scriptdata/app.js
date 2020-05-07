// Filter function
function filter(array, test) {
    let result = [];
    for(let element of array) {
        if (test(element)) {
            result.push(element);
        }
    }
    return result;
}
// function (x) => x.living di pass sebagai test di filter function, karena function x tadi mereturn nilai x.living, ketika masuk kondisional IF yang hanya mengevaluate TRUE, statement dibawah ini hanya mengembalikan element SCRIPTS yang memiliki living = true.
// jika ditambahkan if (!test(element)) maka IF tetap mengevaluasi TRUE jika fungsi test tadi mencari x.living yang bernilai bukan true. Bisa juga dengan pemahaman seperti jika test(element) mengevaluasi TRUE karena ada negasi maka menjadi FALSE sehingga IF tidak dievaluasi, namun jika element.living tersebut FALSE, maka akan jadi TRUE dan IF akan terevaluate
// sama seperti if (x != 10) maka IF tetap evaluate TRUE jika angka bernilai bukan 10.
let living = filter(SCRIPTS, x => x.living);

// filter merupakan method standard array
console.log(SCRIPTS.filter(x=>x.year >= 1987));



// Map Function 
function map(array, func) {
  let result = [];
  for(element of array) {
    result.push(func(element));
  }
  return result;
}

// me-mapping ke array baru agar yang muncul hanya nama saja
console.log(map(living, x => x.name));

// merupakan method standard array
console.log(living.map(x => x.name));



// forEach Function
function forEach(array, func) {
  for(element of array) {
    func(element);
  }
}

let arr = [0,1,2,3,4,5];
forEach(arr, x => console.log(x));

// method forEach merupakan method standard
arr.forEach(x => console.log(`Nilai ${x}`));
arr.forEach(x => {
  if(x%2 == 0) {
    return console.log(`${x} is even`);
  }
});



// Reduce Method
function reduce(array, combine, current) {
  let result = current;
  for(element of array) {
    result = combine(result, element)
  }
  return result;
}

console.log(reduce(arr, (a,b) => a + b, 0));

let someArr = [20,27,59,28,49,10,58];
console.log(reduce(someArr, (a,b) => {
  if(a > b) return a;
  return b;
}, 0));

// dalam method standardnya jika current di omit/tidak di tentukan maka defaultnya adalah element array pertama
// sehingga reduce/b akan dimulai pada element[1]
console.log(someArr.reduce((a,b)=>{
  if(a < b) return a;
  return b;
}));

//menghitung bahasa mana yang memiliki range terbesar
function calc(arr) {
  return arr.ranges.reduce((a, [from, to]) =>{
    return a + (to - from); // from to karena kita dah tau di array ranges cuma terdiri dr 2 element aja / destruktur
  },0) // perlu param 0 agar reduce mulai dari element ke 0
}

// ini adalah bentuk abstraksnya, memilih element a / b tergantung mana yg lebih besar rangenya, dimana rangenya dihitung dengan fungsi yang lebih spesifik (calc)
console.log(SCRIPTS.reduce((a,b) => {
  return calc(a) > calc(b) ? a : b
}));

// countBy Function  
function countBy(array, callback) {
  let result = [];
  for(element of array) {
    let name = callback(element);
    let known = result.findIndex(c => c.indicator == name);
    if(known == -1) {
      result.push({indicator: name, count: 1});
    } else {
      result[known].count++;
    }
  }
  return result;
}

console.log(countBy(someArr, n => n > 40));