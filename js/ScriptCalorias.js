const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''

    if (imc < 18.5) {
      classification = ' Bajo Peso '
    } else if (imc < 25) {
      classification = 'Peso normal'
    } else if (imc < 30) {
      classification = 'Sobre Peso'
    } else if (imc < 35) {
      classification = 'Obesidad Grado I'
    } else if (imc < 41) {
      classification = 'Obesidad Grado II'
    } else {
      classification = 'Obesidad Grado III'
    }
    
    resultado.innerHTML = `IMC: ${imc} (${classification})`
  } else {
    resultado.innerHTML = 'Rellena los Campos'
  }
}