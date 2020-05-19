const $ =(x) => document.querySelector(x);
const $$ =(x) => document.querySelectorAll(x);

const operate = {
  more: (x,y) => x > y,
  less: (x,y) => x < y,
  equal: (x,y) => x == y
};

let rand = ()=>Math.floor(Math.random()*10);

function clear() {
  $('.next').textContent = '';
  $('.generated').textContent = rand();
  
}

function play() {
  $('.next').textContent = rand();
  
  let exec = $$('[name=choice]');
  let x = $('.next').textContent;
  let y = $('.generated').textContent;
  
  for (let i = 0; i < exec.length; i++) {
    if (exec[i].checked) {
      exec = exec[i].value;
    }
  }
  
  if(operate[exec](x,y)) {
    alert('Your choice was right');
  } else {
    alert('You lose moron');
  }
  
  setTimeout(clear, 1000);
}

$('.generated').textContent = rand();
$('.btn').addEventListener('click', play);