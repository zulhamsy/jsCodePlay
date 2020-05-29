const $ = (x) => document.querySelector(x);

$('#calc').addEventListener('click',
  () => {
    // load spinner
    $('.hider').style.display = 'inline-block';
    // run calc function after 1s
    setTimeout(calc,1000);
  }
);

function calc() {
    let amount = Number($('#amount').value),
      ipm = Number($('#interest').value) / 100 / 12,
      month = Number($('#duration').value),
      totalInt = Number((amount * ipm * month)),
      totalPay = amount + totalInt,
      monthPay = totalPay / month;

      checker(totalPay, month);

    $('#result-total').textContent = `Rp.${totalPay.toFixed(2)}`;
    $('#result-interest').textContent = `Rp.${monthPay.toFixed(2)}`;
    // hide spinner
    $('.hider').style.display = 'none';
}

function checker(pay, month) {
  if(pay != 0 && month != 0) {
    $('.result').style.display = 'block';
    $('.alert').style.display = 'none';
  } else {
    $('.result').style.display = 'none';
    $('.alert').style.display = 'block';
  }
}