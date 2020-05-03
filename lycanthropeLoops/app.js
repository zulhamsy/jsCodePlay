// Mendapatkan data table korelasi [20,10,5,1] bermakna 20 tanpa event tertentu (ex bread) dan tanpa berubah menjadi squirrel, 10 bread namun tanpa squirrel, 5 tanpa bread namun squirrel, dan 1 event bread dan squirrel

function tableFor(event, log) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < log.length; i++) {
    let index = 0,
      entry = log[i];
    // includes utk menilai apakah suatu value ada didalam Array 
    if (entry.events.includes(event)) index += 1
    if (entry.squirrel) index += 2
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));