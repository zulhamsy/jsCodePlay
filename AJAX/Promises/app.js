let buyPhone = new Promise((resolve, reject) => {
    let savings = 100000;
    let price = 50000;

    if(savings >=  price) {
        resolve({
            brand: 'Samsung',
            model: 'Galaxy S10+'
        });
    } else {
        reject('Not buying new phone');
    }
});

console.log(buyPhone);
// then dan catch adalah method instance Promise untuk melakukan aksi ketika fulfilled / reject
buyPhone
    // value adalah nilai yang direturn oleh Promise ketika resolve / fulfilled
    .then(function(value) {
        console.log(`Yeah I buy new phone`, value);
    })
    // reason adalah nilai yang direturn Promise ketika rejected
    .catch(function(reason) {
        console.log(`Im sad because`, reason);
    })