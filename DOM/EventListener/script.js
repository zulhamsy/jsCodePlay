document.querySelector('.btn').addEventListener('click',
function() {
    document.querySelector('#result').textContent = (Math.floor(Math.random()*1000));
})

// add card in card container
document.querySelector('.add-card').addEventListener('click',
    function() {
        let newDiv = document.createElement('div');
        let divLeng = document.querySelector('.card-container').children.length;
        newDiv.appendChild(document.createTextNode(divLeng+1));
        newDiv.className = 'card';
        document.querySelector('.card-container').appendChild(newDiv);
    }
)

// remove last element card
document.querySelector('.remove-card').addEventListener('click', 
    function() {
        let parentNode = document.querySelector('.card-container');
        parentNode.removeChild(parentNode.lastElementChild);
    }
)