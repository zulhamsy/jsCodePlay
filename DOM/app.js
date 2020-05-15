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


// create Element

// assign variable to store element
const li = document.createElement('li');

// add class to li
li.className = 'collection-item';

// add text node (optional) + append to li
li.appendChild(document.createTextNode('new list item'));

// assign new var to store "a" tag
const anchor = document.createElement('a');

// add class to a tag
anchor.className = 'delete-item secondary-content';

// add attribute to a tag
anchor.setAttribute('href', '#');

// add inner HTML to a tag
anchor.innerHTML = '<i class="fa fa-remove"></i>';

// append a tag to li tag
li.appendChild(anchor);

// add li to ul.collection
$('ul.collection').appendChild(li);