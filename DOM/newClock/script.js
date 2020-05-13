let $ = (query) => document.querySelector(query);

function printTime() {
  let time = new Date();
  $('.hour').textContent = addZero(time.getHours());
  
  $('.minute').textContent = addZero(time.getMinutes());
  
  if(time.getSeconds()%2 == 0) {
    $('.second-tick').style.opacity = '0';
  } else {
    $('.second-tick').style.opacity = '1';
  }
  
  $('.milisec').textContent = Math.ceil(time.getMilliseconds()/100);
  // $('.second-tick').textContent = time.getSeconds();
}

function addZero(num) {
  if(num < 10) {
    num = '0' + num.toString();
  }
  return num;
}

setInterval(printTime, 100);