let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

function exibirTextoNaTela(lista) {
    let container = document.getElementById('saida');

    // cria uma lista não ordenada
    let ul = document.createElement('ul');

    // percorre o array e cria <li> para cada item
    lista.forEach(function(item) {
        let li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    // coloca a lista dentro da div
    container.appendChild(ul);
}

exibirTextoNaTela(linguagensDeProgramacao);
