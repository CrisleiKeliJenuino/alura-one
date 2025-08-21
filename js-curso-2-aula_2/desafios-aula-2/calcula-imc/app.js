//calcular o IMC
function calcularIMC(altura, peso) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function mostrarIMC() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);   
    let resultado = calcularIMC(altura, peso);
    document.getElementById("resultado").innerText = `Seu IMC é: ${resultado}`;
    // Limpa os campos para novo cálculo
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
}