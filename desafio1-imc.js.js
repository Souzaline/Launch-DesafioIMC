// DESAFIO 1 - Launch Base

// Cálculo de IMC

const nome = 'Maicon'
const peso = 64
const altura = 1.75


const imc = (peso / (altura * altura));

if (imc >= 30) {
    console.log('Você está acima do peso.')
} else {
    console.log('Você não está acima do peso')
}

