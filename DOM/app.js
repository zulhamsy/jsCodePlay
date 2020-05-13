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