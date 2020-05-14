const $ = (query) => document.querySelector(query);

// get element by class name
console.log($('.btn'));

// get class name (string) from element tag
console.log($('li').className);
console.log($('a').className);

// convert class name to array
console.log($('a').className.split(" "));

// mengganti text pada HTML
$('span.card-title').innerText = "Changed";

// change css property
$('span.card-title').style.display = 'none';


// multiple DOM Selectors

// mencari element by class name yang menjadi child .collection
console.log($('.collection').getElementsByClassName('collection-item'));

// mengganti text content dari .collection > .collection-item child ke 3 dengan Hello
$('.collection').getElementsByClassName('collection-item')[2].textContent = 'Hello';