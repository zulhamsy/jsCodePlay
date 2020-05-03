function addZero(time) {
  if(time < 10) {
    time = "0" + time.toString();
  }
  return time;
}

function viewTime() {
  let watch = [];
  let time = new Date();
  
  watch.push(addZero(time.getHours()));
  watch.push(addZero(time.getMinutes()));
  watch.push(addZero(time.getSeconds()));
  return watch;
}

function printTime() {
  let watch = viewTime();
  // set hours
  document.getElementById("hour").innerHTML = watch[0];
  // set minute
  document.getElementById("minute").innerHTML = watch[1];
  // set second
  document.getElementById("second").innerHTML = watch[2];
}

setInterval(printTime, 1000);