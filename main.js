function botaoLogar(){
    const email = document.getElementById("email")

    const senha = document.getElementById("senha")

    const correta_senha = "12345"

    const correto_email = "joao123@gmail.com"

    if (email.value === correto_email.valueOf && senha.value === correta_senha.valueOf){
        window.location.replace("logado.html",);
    }
}
