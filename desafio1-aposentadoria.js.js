// DESAFIO 1 - Launch Base

// Cálculo de aposentadoria


const nome = 'Maria'
const sexo = 'F'
const idade = 55
const contribuicao = 30

const  calculoContribuicao  =  idade  +  contribuicao

// essas variáveis ​​irão retornar verdadeiro ou falso
const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if  (homemPodeAposentar || mulherPodeAposentar)  {
    console.log(`${nome}, você pode se aposentar!`)
}  else  {
    console.log(`${nome }, você não pode se aposentar!`)
}