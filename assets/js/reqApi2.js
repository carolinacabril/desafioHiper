let form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let city = document.getElementById('city').value;
    let phone = document.getElementById('phone').value;
    let companyType = document.getElementById('companyType').value;

    if(name != '' && email != '' && city != '' && phone != '' && companyType != ''){
        //fetch post request
        const url = 'https://testebee.free.beeceptor.com/cadastrar';

        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.status);
            alert('Cadastro Efetudo com sucesso!');
        });

    }else{
        alert('Por favor preencha todos os campos!');
    }
})

console.log(form);