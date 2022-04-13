const button = document.getElementById('button')

button.addEventListener('click', (event) => {

    event.preventDefault()

    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const telefone = document.getElementById('telefone')
    const mensagem = document.getElementById('mensagem')
    const paragrafoNome = document.getElementById('paragrafoNome')
    const paragrafoEmail = document.getElementById('paragrafoEmail')
    const paragrafoTelefone = document.getElementById('paragrafoTelefone')
    const paragrafoDescricao = document.getElementById('paragrafoDescricao')
    if (nome.value == '') {
        nome.classList.add("inputerror")
        paragrafoNome.classList.add("alerta")
    } else {
        nome.classList.add("activetrue")
    }

    if (email.value == '' || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
        email.classList.add("inputerror")
        paragrafoEmail.classList.add("alerta")
    } else {
        email.classList.add("activetrue")
    }
    if (telefone.value == '') {
        telefone.classList.add("inputerror")
        paragrafoTelefone.classList.add("alerta")
    } else {
        telefone.classList.add("activetrue")
    }

    if (mensagem.value == '') {
        mensagem.classList.add("inputerror")
        paragrafoMensagem.classList.add("alerta")
    } else {
        mensagem.classList.add("activetrue")
    }
})