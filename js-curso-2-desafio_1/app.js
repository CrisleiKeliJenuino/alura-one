// Muda o título da página
document.querySelector('h1'). textContent = 'Hora do Desafio ';

// Funções para os botões
// Cada função deve exibir um alerta, console.log ou prompt com uma mensagem específica
function verificarConsole() {
    console.log('O botão Console foi clicado!');
}

function verificarAlerta() {
    alert('Eu amo JS!');
}

function perguntarCidade() {
    // Pergunta o nome da cidade
    const cidade = prompt("Digite o nome de uma cidade do Brasil:");

    // Verifica se o usuário digitou algo
    if (cidade) {
        // Exibe o alerta com a mensagem personalizada
        alert(`Estive em ${cidade} e lembrei de você.`);
    } else {
        alert("Você não digitou nenhuma cidade.");
    }
}

function somar() {
    // Solicita dois números ao usuário
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));

    // Verifica se os números são válidos
    if (!isNaN(numero1) && !isNaN(numero2)) {
        // Calcula a soma
        const resultado = numero1 + numero2;
        alert(`A soma de ${numero1} e ${numero2} é ${resultado}.`);
    } else {
        alert("Por favor, digite números válidos.");
    }
}


