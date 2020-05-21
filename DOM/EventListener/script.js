let $ = (query) => document.querySelector(query);

$('.btn').addEventListener('click',
function() {
    $('#result').textContent = (Math.floor(Math.random()*1000));
})

// add card in card container
$('.add-card').addEventListener('click',
    function() {
        let newDiv = document.createElement('div');
        let divLeng = $('.card-container').children.length;
        newDiv.appendChild(document.createTextNode(divLeng+1));
        newDiv.className = 'card';
        $('.card-container').appendChild(newDiv);
    }
)

// remove last element card
$('.remove-card').addEventListener('click', 
    function() {
        let parentNode = $('.card-container');
        parentNode.removeChild(parentNode.lastElementChild);
    }
)

// change card color onclick

// listener dibawah ini hanya akan diterapkan pada div.card yang tersedia pada HTML sebelum page load, jika ada .card baru maka listener tidak akan berfungsi pada element tsb
/*$('.card').addEventListener('click',
  function() {
    $('.card').style.background = "black";
    $('.card').style.color = "white";
  }
)*/

// untuk fix tsb maka perlu event delegation yang memanfaatkan event bubbling
$('.card-container').addEventListener('click',
  function(event) {
    if(event.target.classList.contains('card')) {
      event.target.style.background = "black";
      event.target.style.color = "white";
      }
      //console.log(event.target.classList.contains("card"));
    }
)