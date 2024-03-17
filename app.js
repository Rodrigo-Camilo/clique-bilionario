let botaoGerar = document.getElementById("botao-gerar");
let valor = document.querySelector('.valor');
let multiplicadorV = document.querySelector('.multiplicadorV');
let cronometro = document.getElementById("cronometro"); 

let precoPagar = 0;

let saldo = 0;
let multiplicador = 1;
let cliques = 0;

let c_Calculadora = document.getElementById("calculadora-comprar");
let c_Celular = document.getElementById("celular-comprar");
let c_PcSimples = document.getElementById("pcsimple-comprar");
let c_PcAdvanced = document.getElementById("pcadvanced-comprar");
let c_Onix = document.getElementById("onix-comprar");
let c_Bmw = document.getElementById("bmw-comprar");
let c_Ferrari = document.getElementById("ferrari-comprar");
let c_Mansao = document.getElementById("mansao-comprar");

let milionario = false;
let bilionario = false;

function formatarSaldo(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function gerarDinheiro(v, m) {
    saldo = saldo + ((v * m) / 100);
    return saldo;
}

function atualizarMultiplicador(novoMultiplicador) {
    multiplicadorV.textContent = `${novoMultiplicador}x`;
}

//preco, multiplicador, verificar mensagem recebida(True/False), Mensagem Recebida, identificador, saldo Extra
function verificarPagamento(p, m, mTF, mR, identificador, sE){ 
    if(saldo >= p){
        multiplicador = m;
        if(mTF == true){
            alert(`${mR}`)
        }
        if(sE != false){
            saldo += sE
        }
        document.getElementById(`${identificador}`).classList.add('fade-out');
    
        setTimeout(function() {
            document.getElementById(`${identificador}`).style.display = 'none';
        }, 500);    
        atualizarMultiplicador(m)
        saldo -= p
        valor.textContent = formatarSaldo(saldo);
    }else {
        alert("Saldo insuficiente")
    }
}

botaoGerar.addEventListener('click', function() {
    saldo = gerarDinheiro(100, multiplicador);
    valor.textContent = formatarSaldo(saldo);
    if(milionario == false && saldo >= 1000000){
        milionario = true;
        alert('Você se tornou um milionário!!')
        document.getElementById('objetivo01').innerHTML = '<del>Se torne um Milionário </del>✅';
    }
    if(bilionario == false && saldo >= 1000000000) {
        bilionario = true;
        document.getElementById('objetivo02').innerHTML = '<del>Se torne um Bilionário </del>✅';
        document.getElementById('gif-milionario').style.display = 'block';
        alert("Você se tornou um Bilionário!!!!")
    }

    const sifroesContainer = document.querySelector('.sifroes');
    for (let i = 0; i < 10; i++) { 
        const sifrao = document.createElement('span');
        sifrao.textContent = '💲';
        sifrao.classList.add('sifrao'); 
        sifrao.style.left = Math.random() * 100 + 'vw'; 
        sifrao.style.bottom = '0'; 
        sifrao.style.animationDuration = Math.random() * 2 + 1 + 's'; 
        sifroesContainer.appendChild(sifrao);
        
        setTimeout(() => {
            sifrao.classList.add('fade-out');
            setTimeout(() => {
                sifrao.remove();
            }, 500);
        }, 2000); 
    }
    cliques++;
    document.querySelector('.cliques').innerHTML = `Cliques: ${cliques}`;
});

c_Calculadora.addEventListener('click', function() {
    let precoPagar = 20;
    let mensagem = '';
    verificarPagamento(precoPagar, 5, false, mensagem, 'produto-calculadora', false)
});

c_Celular.addEventListener('click', function() {
    let precoPagar = 300;
    let mensagem = '';
    verificarPagamento(precoPagar, 10, false, mensagem, 'produto-celular', false)
});

c_PcSimples.addEventListener('click', function() {
    let precoPagar = 1000;
    let mensagem = '';
    verificarPagamento(precoPagar, 50, false, mensagem, 'produto-pcsimple', false)
});

c_PcAdvanced.addEventListener('click', function() {
    let precoPagar = 5000;
    let mensagem = 'Neymar foi ao seu aniversário de 18 anos e te presenteou 25 mil reais!';
    verificarPagamento(precoPagar, 100, true, mensagem, 'produto-pcadvanced', 25000)
});

c_Onix.addEventListener('click', function() {
    let precoPagar = 50000;
    let mensagem = 'Você conheceu um bilionário e o convenceu a investir em você, aumentando o multiplicador em 1000x!!';
    verificarPagamento(precoPagar, 1000, true, mensagem, 'produto-onix', false)
});

c_Bmw.addEventListener('click', function() {
    let precoPagar = 200000;
    let mensagem = 'Seu amigo bilionário passou uma empresa para seu nome para ajudar com seus lucros, seus lucros totais se multiplicaram em 10000x';
    verificarPagamento(precoPagar, 10000, true, mensagem, 'produto-bmw', false)
});

c_Ferrari.addEventListener('click', function() {
    let precoPagar = 1000000;
    let mensagem = '';
    verificarPagamento(precoPagar, 1000000, false, mensagem, 'produto-ferrari', false)
});

c_Mansao.addEventListener('click', function () {
    let precoPagar = 10000000;
    let mensagem = 'Parabéns, sua empresa cresceu significativamente, aumentando seus lucros em 100 milhões de vezes!!';
    verificarPagamento(precoPagar, 100000000, true, mensagem, 'produto-mansao', false)
})

let segundos = 0;
let minutos = 0;
let horas = 0;

function atualizarCronometro() {
    segundos++;
    if (segundos >= 60) {
        segundos = 0;
        minutos++;
        if (minutos >= 60) {
            minutos = 0;
            horas++;
        }
    }
    cronometro.textContent = `${horas < 10 ? "0" + horas : horas}:${minutos < 10 ? "0" + minutos : minutos}:${segundos < 10 ? "0" + segundos : segundos}`;
}

setInterval(atualizarCronometro, 1000);