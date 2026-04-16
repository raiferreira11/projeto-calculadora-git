function adicionarValor(valor) {
    document.querySelector('.display').value += valor;
}

function calcular() {
    let display = document.querySelector('.display');
    let expressao = display.value.replace(/x/g, '*');

    try {
        display.value = eval(expressao);
    } catch (error) {
        display.value = 'Erro';
    }
}

function limparDisplay() {
    document.querySelector('.display').value = '';
}

function apagarDisplay() {
    let display = document.querySelector('.display');
    display.value = display.value.slice(0, -1);
}
