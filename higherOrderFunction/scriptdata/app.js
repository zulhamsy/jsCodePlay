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