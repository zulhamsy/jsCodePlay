document.querySelector('.btn').addEventListener('click',
function() {
    document.querySelector('#result').textContent = (Math.floor(Math.random()*1000));
})