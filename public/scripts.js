document
    .querySelector('header button')
    .addEventListener("click", function() {//Fica atento para quando o cliente clicar, e após o clique, executa td essa função
        document
        .querySelector('.form')
        .classList.toggle('hide') // Toggle adiciona a classe se não existe, e elimina se já existe
    })