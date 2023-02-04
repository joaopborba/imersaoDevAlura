const calculateButton = document.getElementById('calculate-button');

function mult (){
    const valueDollar = document.getElementById('value-dollar').value;
    const valueCotacao = document.getElementById('value-cotacao').value;
    const result = document.getElementById('result');
    const cotacao = valueDollar * valueCotacao;
    result.textContent = `O resultado é: ${cotacao}`;
}

calculateButton.addEventListener("click", mult);