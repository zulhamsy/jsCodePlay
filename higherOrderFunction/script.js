// Returning Function
function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
/*
ketika fungsi greaterThan(n) dipanggil dengan binding di greaterThan10,
maka fungsi tersebut akan me-return m => m > n; atau bisa juga ditulis:

  function(m) {
    return m > n;
  }

jadi nilai 10 yang dipassing oleh argumen n dan di pass saat pemanggilan pertama
dan ketika fungsi dari greaterThan10() tersebut dipanggil melalui greaterThan10(11)
maka nilai 11 tersebut bukan di pass ke n tetapi m di fungsi yang mereturn m > n
sementara nilai 10 di pass ke n
sehingga return dari fungsi tsb menjadi 11 > 10 atau // true
*/
console.log(greaterThan10(11));
// bisa juga dengan cara pemanggilan model
console.log(greaterThan(10)(11)); // true


// Passing Function as Argument
function noisy(f) {
  return (...arg) => {
    console.log(`Calling with [${arg}]`);
    let result = f(...arg);
    console.log(`Calling with [${arg}] returned ${result}`);
    return result; 
  }
}

noisy(Math.min)(2,3,4); // Calling with [2,3,4] - Calling with [2,3,4] returned 2;
// bisa juga dengan
let getMin = noisy(Math.min);
getMin(1,2,3,4);
// jadi method Math.min di passing ke parameter f di fungsi noisy, kemudian
// fungsi method tsb dijalankan di dalam f(...arg) dimana argumen arg di passing saat pemanggilan kedua