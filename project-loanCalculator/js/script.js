const $ = (x) => document.querySelector(x);

$('#calc').addEventListener('click',
  () => {
    let amount = Number($('#amount').value),
        ipm = Number($('#interest').value) / 100 / 12,
        month = Number($('#duration').value),
        totalInt = Number((amount * ipm * month)),
        totalPay = amount + totalInt,
        monthPay = totalPay / 12;
        
    
    
    $('#result-total').textContent = `Rp.${totalPay.toFixed(2)}`;
    $('#result-interest').textContent = `Rp.${monthPay.toFixed(2)}`
  }
);