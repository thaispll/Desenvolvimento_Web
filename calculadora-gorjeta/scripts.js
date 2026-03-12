//SELECIONAR ELEMENTOS DO DOM

const inputConta = document.getElementById('conta');
const inputPessoas = document.getElementById('pessoas');
const botoesGorjeta = document.querySelectorAll('.btn-gorjeta');
const inputCustomizado = document.getElementById('customizado');
const displayGorjeta = document.getElementById('valor-gorjeta');
const displayTotal = document.getElementById('valor-total');
const btnResetar = document.getElementById('btn-resetar');
const msgErro = document.getElementById('msg-erro');

//variáveis de controle
let valorConta = 0.0;
let valorPessoas = 0;
let porcentagemGorjeta = 0;

/* Calcular gorjeta e total por pessoa*/
function calcular(){
    //conta e pessoas devem ser maiores que zero
    if (valorConta > 0 && valorPessoas >= 1){
        const totalGorjeta = valorConta * (porcentagemGorjeta / 100);
        const gorjetaPorPessoa = totalGorjeta / valorPessoas;
        const totalPorPessoa = (valorConta + totalGorjeta) /valorPessoas;

        //atualizar a tela com 2 casas decimais
        displayGorjeta.innerText = gorjetaPorPessoa.toFixed(2);
        displayTotal.innerText = totalPorPessoa.toFixed(2);

        //Habilitar o botão de reset
        btnResetar.disabled=false;
    } else {
        //Resetar os valores se os inputs forem inválidos
        displayGorjeta.innerText="0.00";
        displayTotal.innerText="0.00";
    }
}

//Criar evento: Valor da Conta
inputConta.addEventListener('input', () => {
    valorConta = parseFloat(inputConta.value) || 0.00;

    //validação: não pode permitir valores negativos na conta
    if (valorConta <0){
        inputConta.value= "";
        valorConta = 0;
    }
    calcular();
});

//Criar evento: Número de pessoas
inputPessoas.addEventListener('input', () => {
    valorPessoas = parseInt(inputPessoas.value) || 0;

    //mostrar erro se for zero ou negativo
    if (valorPessoas < 0){
        msgErro.textContent = "O número não pode ser negativo";
        msgErro.style.display= 'block';
        inputPessoas.classList.add('erro');
    } else if (valorPessoas === 0){
        msgErro.textContent = "O número não pode ser zero";
        msgErro.style.display = 'block';
        inputPessoas.classList.add('erro');
    } else {
        msgErro.style.display = 'none';
        inputPessoas.classList.remove('erro');
        calcular();
    }
});

//Criar evento: Selecionar botões de porcentagem fixa
botoesGorjeta.forEach(botao => {
    botao.addEventListener('click',(e) => {
        //gerenciar as classes ativo
        botoesGorjeta.forEach(btn => btn.classList.remove('ativo'));
        e.target.classList.add('ativo');

        //limpar campo custom ao usar botões fixos
        inputCustomizado.value = "";

        porcentagemGorjeta =parseFloat(e.target.dataset.valor);
        calcular();
    });
});

//Criar evento: Gorjeta personalizada 

inputCustomizado.addEventListener('input', () => {
    //Remover destaque dos botões fixos
    botoesGorjeta.forEach(btn => btn.classList.remove('ativo'));

    porcentagemGorjeta = parseFloat(inputCustomizado.value) || 0;

    //validação: não pode permitir porcentagem negativa
    if (porcentagemGorjeta <0){
        inputCustomizado.value="";
        porcentagemGorjeta = 0;
    }
    calcular();
});

//Criar evento: botão resetar

btnResetar.addEventListener('click', () => {
    //Resetar inputs
    inputConta.value = "";
    inputPessoas.value = "";
    inputCustomizado.value = "";

    //Resetar displays
    displayGorjeta.innerText = "0.00";
    displayTotal.innerText = "0.00";

    botoesGorjeta.forEach(btn => btn.classList.remove('ativo'));
    inputPessoas.classList.remove('erro');
    msgErro.style.display='none';

    //Desabilitar botão e limpar variáveis
    btnResetar.disabled = true;
    valorConta = 0.0;
    valorPessoas = 0;
    porcentagemGorjeta = 0;
})




