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