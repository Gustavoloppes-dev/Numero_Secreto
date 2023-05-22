function verificaSeOChutePossuiUmValorValido(chute) {
    const numero =+chute;
    console.log(numero)
    
    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += "<div>valor invalido</div>"
        return
    }
    
    if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre 
        ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = 
        `<h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}.</h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente!</button>
        `
    }else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }

}

function gameOver(chute) {
    if (typeof chute == "string" && chute ==="game over") {
        document.body.style.background = "var(--bg-over)";
        document.body.innerHTML = 
        `<h2 class="btn-over">GAME OVER!</h2>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente!</button>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', (e) => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
