const $ = (query) => document.querySelector(query);

function lock() {
  $('.choice').textContent = $('#num').value;
  if($('.choice').textContent) {
    $('.lock').disabled = true;
  }
}

function play() {
  let rand = Math.ceil(Math.random()*10);
  $('.generate').textContent = rand;
  if($('.choice').textContent == rand) {
    alert('Your choice is fucking right');
  } else {
    alert('You lose moron !!');
  }
  $('.lock').disabled = false;
}

$('.lock').addEventListener('click', lock);
$('.send').addEventListener('click', play)