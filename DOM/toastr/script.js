//toastr.success('Are you the 6 fingered man?');

const $ = (x) => document.querySelector(x);

$('.btn').addEventListener('click',
  (e) => {
    toastr.success('you click this shit', 'success');
    e.preventDefault();
  }
);


toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": true,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "500",
  "timeOut": "2000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}