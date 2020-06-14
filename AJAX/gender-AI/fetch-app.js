const $ = (x) => document.querySelector(x);

$('form').addEventListener('submit',
    (e) => {
        $('#loader').className = 'spinner-border text-primary mb-3 show';
        fetch(`https://api.diversitydata.io/?fullname=${$('#fname').value}%20${$('#lname').value}`)
            .finally(() => $('#loader').className = 'spinner-border text-primary mb-3 hidden')
            .then(response => {
                if(response.status == 200) return response.json();
            })
            .then(result => {
                $('table').className = 'table table-striped show-table'
                $('#name').textContent = result.fullname;
                $('#gender').textContent = result.gender;
                $('#gender-prob').textContent = result["gender probability"];
                $('#ethnic').textContent = result.ethnicity;
                $('#ethnic-prob').textContent = result["ethnicity probability"];
            })

        e.preventDefault();
    }
)