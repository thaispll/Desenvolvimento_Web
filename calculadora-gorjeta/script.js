// Seleção de elementos do DOM
const inputConta = document.getElementById('conta');
const inputPessoas = document.getElementById('pessoas');
const botoesGorjeta = document.querySelectorAll('.btn-gorjeta');
const inputCustomizado = document.getElementById('customizado');
const displayGorjeta = document.getElementById('valor-gorjeta');
const displayTotal = document.getElementById('valor-total');
const btnResetar = document.getElementById('btn-resetar');
const msgErro = document.getElementById('msg-erro');

// Variáveis de controle
let valorConta = 0.0;
let valorPessoas = 0;
let porcentagemGorjeta = 0;

/**
 * Realiza os cálculos de gorjeta e total por pessoa
 */
function calcular() {
    // Validação: Conta e Pessoas devem ser maiores que zero
    if (valorConta > 0 && valorPessoas >= 1) {
        const totalGorjeta = valorConta * (porcentagemGorjeta / 100);
        const gorjetaPorPessoa = totalGorjeta / valorPessoas;
        const totalPorPessoa = (valorConta + totalGorjeta) / valorPessoas;

        // Atualiza a interface com 2 casas decimais
        displayGorjeta.innerText = gorjetaPorPessoa.toFixed(2);
        displayTotal.innerText = totalPorPessoa.toFixed(2);
        
        // Habilita o botão de reset
        btnResetar.disabled = false;
    } else {
        // Reseta os valores se os inputs forem inválidos
        displayGorjeta.innerText = "0.00";
        displayTotal.innerText = "0.00";
    }
}

// Evento: Valor da Conta
inputConta.addEventListener('input', () => {
    valorConta = parseFloat(inputConta.value) || 0.0;

    // Validação: Não permite valores negativos na conta
    if (valorConta < 0) {
        inputConta.value = "";
        valorConta = 0;
    }
    calcular();
});

// Evento: Número de Pessoas com validação de erro
inputPessoas.addEventListener('input', () => {
    valorPessoas = parseInt(inputPessoas.value) || 0;
    
    // Mostra erro se for zero ou negativo
    if (valorPessoas <= 0 && inputPessoas.value !== "") {
        msgErro.style.display = 'block';
        inputPessoas.classList.add('erro');
    } else {
        msgErro.style.display = 'none';
        inputPessoas.classList.remove('erro');
        calcular();
    }
});

// Evento: Seleção de botões de porcentagem fixa
botoesGorjeta.forEach(botao => {
    botao.addEventListener('click', (e) => {
        // Gerencia classe 'ativo'
        botoesGorjeta.forEach(btn => btn.classList.remove('ativo'));
        e.target.classList.add('ativo');
        
        // Limpa o campo Custom ao usar botões fixos
        inputCustomizado.value = "";
        
        porcentagemGorjeta = parseFloat(e.target.dataset.valor);
        calcular();
    });
});

// Evento: Gorjeta Personalizada (Custom)
inputCustomizado.addEventListener('input', () => {
    // Remove destaque dos botões fixos
    botoesGorjeta.forEach(btn => btn.classList.remove('ativo'));
    
    porcentagemGorjeta = parseFloat(inputCustomizado.value) || 0;

    // Validação: Não permite porcentagem negativa
    if (porcentagemGorjeta < 0) {
        inputCustomizado.value = "";
        porcentagemGorjeta = 0;
    }
    calcular();
});

// Evento: Botão RESETAR
btnResetar.addEventListener('click', () => {
    // Reseta inputs
    inputConta.value = "";
    inputPessoas.value = "";
    inputCustomizado.value = "";
    
    // Reseta displays
    displayGorjeta.innerText = "0.00";
    displayTotal.innerText = "0.00";
    
    // Reseta estados visuais
    botoesGorjeta.forEach(btn => btn.classList.remove('ativo'));
    inputPessoas.classList.remove('erro');
    msgErro.style.display = 'none';
    
    // Desabilita o botão e limpa variáveis
    btnResetar.disabled = true;
    valorConta = 0.0;
    valorPessoas = 0;
    porcentagemGorjeta = 0;
});