const h1 = document.querySelector('h1');
const pirlo = document.querySelector('#morat');
const formulario = document.querySelector('#formulario');
const cangri = document.querySelector('#mora');
const palenque = document.querySelector('.crossover')
const cualEsEsa = document.querySelector('#cualEsEsa')
const morad = document.querySelector('#morad')
const ke = document.querySelector('#ke')

formulario.addEventListener('submit', clickeo)

function clickeo(event){
    console.log({event})
    event.preventDefault()
    const temaCualEsEsa = `${pirlo.value} ` + ` ${cangri.value}`
    const KE = "ke?"
    console.log(pirlo.value +'' ,cangri.value)
    console.log("papi tamo activos")
    ke.innerText = KE;
    cualEsEsa.innerText = temaCualEsEsa;
}