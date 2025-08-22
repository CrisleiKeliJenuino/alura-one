function tabuada(numero) {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }
    return resultado;
}

function mostrarTabuada() {
    const numeroInput = document.getElementById('numeroInput').value;
    const resultado = tabuada(Number(numeroInput));
    document.getElementById('resultadoTabuada').innerHTML = resultado;
    // Limpa o campo para nova entrada
    document.getElementById("numeroInput").value = "";
}