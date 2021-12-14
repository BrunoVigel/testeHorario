const diaDaSemana = new Date().getDay();
const horaDoDia = new Date().getHours();

const naoFuncionando = diaDaSemana >= 6 & horaDoDia >= 8 & horaDoDia >= 19;

console.log(naoFuncionando)

const botao = document.querySelector('#botao')
const modal = document.querySelector('div')

botao.addEventListener('click', (e) => {
    if(!naoFuncionando) {
        e.preventDefault()
        modal.classList.add('open')
    } else {

    }
});
