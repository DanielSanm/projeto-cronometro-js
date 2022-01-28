const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0;
let minutos = 0;
let horas = 0;
let timer;
let clicou = false



iniciar.addEventListener('click', () => {
    if(!clicou) {
        timer = setInterval(() => {
            relogio.innerHTML = iniciaContagem()
        }, 1000)
        clicou = true
    }
})
pausar.addEventListener('click', () => {
  clearInterval(timer)
  relogio.style.color = 'red'
  clicou = false
})

zerar.addEventListener('click', () => {
    clearInterval(timer)
    horas = 0
    minutos = 0
    segundos = 0
    relogio.style.color = 'black'

    relogio.innerHTML = `${zeroEsquerda(horas)}:${zeroEsquerda(minutos)}:${zeroEsquerda(segundos)}`
    clicou = false
})


function iniciaContagem() {
    relogio.style.color = 'black'
    if(horas > 23) {
        horas = 0
    } else if(minutos > 59) {
        minutos = 0
        horas += 1
    } else if(segundos > 59) {
        segundos = 0
        minutos += 1
    } else {
        segundos += 1
    }

    return `${zeroEsquerda(horas)}:${zeroEsquerda(minutos)}:${zeroEsquerda(segundos)}`
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}