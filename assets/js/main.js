
//puxando os elementos do html por id
const display = document.getElementById("display");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const body = document.querySelector('body');
const toggle = document.getElementById('circle');


// Obtém o valor atual do elemento de entrada 'display'
// Remove o último caractere do valor usando o método slice
function del() {
    display.value = display.value.slice(0, -1);
}

// Função que adiciona o valor do parâmetro 'input' ao final do valor atual do elemento 'display'
function appendToDisplay(input) {
    display.value += input;
}

// Função que define o valor do elemento 'display' como uma string vazia
function resetDisplay() {
    display.value = "";
}

function equalDisplay() {
    // Avalia a expressão matemática contida no valor do display, eval não é recomendado por falhas de segurança
    let result = eval(display.value);

    // Verifica se o resultado é indefinido ou uma string vazia
    if (result === undefined || result === '') {
        // Se for, define o valor do display como 'Enter a number'
        display.value = 'Enter a number';
    } else {
        // Caso contrário, define o valor do display como o resultado da avaliação
        display.value = result;
    }
}

// try {
//     // Usa a função Function para criar uma nova função que retorna o resultado da expressão
//     let result = new Function('return ' + display.value)();

//     // Verifica se o resultado é indefinido ou uma string vazia
//     if (result === undefined || result === '') {
//         // Se for, define o valor do display como 'Enter a number'
//         display.value = 'Enter a number';
//     } else {
//         // Caso contrário, define o valor do display como o resultado da avaliação
//         display.value = result;
//     }
// } catch (error) {
//     // Em caso de erro, define o valor do display como 'Error'
//     display.value = 'Error';
// }

two.addEventListener('click', function () {
    body.classList.add('active1');
    body.classList.remove('active2');
    //posição do toggle esquerda
    toggle.style.left = '36%';
})

one.addEventListener('click', function () {
    body.classList.remove('active1');
    body.classList.remove('active2');
    //posição do toggle centro
    toggle.style.left = '0%';
})

three.addEventListener('click', function () {
    body.classList.add('active2');
    body.classList.remove('active1');
    //posição do toggle direita
    toggle.style.left = '75%';
})