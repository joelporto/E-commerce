const acesso = () =>{
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    fetch("http://localhost:3000/login",{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(response => response.json())
    .then(response =>{
        if(response.userValid == true){
            window.location.href = `../home/index.html`
        }else{
            alert("Usuario não encontrado!")
        }
        console.log(response)
    })
    
    
}

const validarAcesso = () =>{
    const login = document.querySelector("#email").value;
    const senha = document.querySelector("#password").value;

    if(login.length == 0 || senha.length == 0){
        swal.fire({
            icon:'warning',
            title: 'Oops...',
            text: 'Preencha todos os campos!',
            timer: 2000
        })
    }else{
        acesso()
    }
}
document.querySelector("#btn").addEventListener("click", function(){
    validarAcesso()
})




async function reqLogin() {
    const login = document.querySelector("#email").value;
    const senha = document.querySelector("#password").value;
    let loading = document.querySelector("#lds");
    loading.style.display = "flex"

    await fetch("http://localhost:3000/login",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            email: login,
            password: senha
        })
    }).then(response => response.json())
    .then((response)=>{
        if(response.userValid !== true){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuário não encontrado!',
                timer: 2000
            })
        }else{
            localStorage.setItem('User', login)
            window.location.href = `../home/index.html`
        }
    }).finally(()=>{
        setTimeout(loading.style.display = 'nome',3000)
    }).catch((err)=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo deu errado',
            footer: `<label>Contate o administrador! ${err}</label>`,
            timer: 2000
        })
    })
}


