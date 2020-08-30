// Desafio 1 - Launch Base 

// Cálculo de IMC

const nome = "Aline"
const peso = 58
const altura = 1.43

const imc = (peso / (altura * altura))

if (imc >= 30) {
    console.log(`${nome} você está acima do peso`)
} else {
    console.log((`${nome} você não está acima do peso`))
}
