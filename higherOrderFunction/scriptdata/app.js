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
console.log(filter(SCRIPTS, x => x.living));

// filter merupakan method standard array
console.log(SCRIPTS.filter(x=>x.year >= 1987));