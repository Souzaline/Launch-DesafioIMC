// DESAFIO 1 - Launch Base

// Cálculo de aposentadoria

const nome = 'Maria'
const sexo = 'F'
const constribuicao = 30
const idade = 50

const condicao1 = (constribuicao)
const condicao2 = (idade)


/*================================================================================
    > O tempo de contribuição mínimo para homens é 
        de 35 anos e, para mulheres, 30 anos
    > Utilizando a regra 85-95, a soma da idade 
        com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, 
        enquanto a mulher precisa ter no mínimo 85 anos na soma;
================================================================================*/

if (condicao1 >= 30) {
    if (condicao2 >= 55) {
      console.log('Maria, você pode se aposentar')
    } else {
      console.log('Maria, você ainda não pode se aposentar')
    }
  } else {
    console.log('Maria, falta tempo de contribuicao')
  }