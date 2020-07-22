const $ = (x) => document.querySelector(x);

function validator(re, e) {
  if (re.exec(e.target.value)) {
    e.target.classList.remove('is-invalid');
    e.target.classList.add('is-valid');
  } else {
    e.target.classList.remove('is-valid');
    e.target.classList.add('is-invalid');
  }
}

$('#fullname').addEventListener('keyup', (e) => {
  const re = /^[a-z\s]+$/gi;
  validator(re, e);
});

$('#email').addEventListener('keyup', (e) => {
  const re = /^[a-z0-9\.\_\-]+@[a-z0-9]+\.[a-z]{2,5}$/gi;
  validator(re, e);
});

$('#phone').addEventListener('keyup', (e) => {
  const re = /^([0-9]{3,4})\-?([0-9]{3,5})\-?([0-9]{0,5})$/g;
  validator(re, e);
});