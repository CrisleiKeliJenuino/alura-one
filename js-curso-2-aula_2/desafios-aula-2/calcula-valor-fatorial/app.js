function calcularFatorial(n) {
    if (n < 0) return "Inválido";
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function mostrarFatorial() {
    let n = parseInt(document.getElementById("numero").value);
    if (isNaN(n)) {
        document.getElementById("resultado").innerText = "Por favor, digite um número válido.";
        return;
    }
    let resultado = calcularFatorial(n);
    document.getElementById("resultado").innerText = `O fatorial de ${n} é: ${resultado}`;
    document.getElementById("numero").value = "";
}