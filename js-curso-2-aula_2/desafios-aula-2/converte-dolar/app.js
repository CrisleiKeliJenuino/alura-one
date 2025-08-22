function convertDolarToReal(dollarAmount) {
    const exchangeRate = 4.80; // Example exchange rate
    return dollarAmount * exchangeRate;
}

function mostrarConversao() {
    const dollarInput = document.getElementById('dollarInput').value;
    const resultado = convertDolarToReal(Number(dollarInput));
    document.getElementById('resultado').textContent = `R$ ${resultado.toFixed(2)}`;
}