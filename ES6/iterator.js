function iterator(input) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < input.length ? {
                value: input[nextIndex++],
                done: false
            } : {
                done: true
            }
        }
    };
}

let data = [
    'Aaron',
    'James',
    'Arthur'
];

let iteratorProfile = iterator(data); // IMPORTANT
// dengan menyimpan call function di variabel, maka nilai nextIndex update akan tersimpan (renew)
// ketika dipanggil lagi
console.log(iteratorProfile.next());
console.log(iteratorProfile.next());
console.log(iteratorProfile.next());
console.log(iteratorProfile.next());