const $ = (query) => document.querySelector(query);

let counter = [0,0];

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
    counter[1] ++;
    $('.win').textContent = counter[1];
  } else {
    alert('You lose moron !!');
  }
  $('.lock').disabled = false;
  counter[0] ++;
  $('.attempt').textContent = counter[0];
}

$('.lock').addEventListener('click', lock);
$('.send').addEventListener('click', play)