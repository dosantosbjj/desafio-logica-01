# Desafio Mentoria 1

Este projeto foi desenvolvido como parte do primeiro desafio de mentoria 2.0 do Julio de Lima. O objetivo inicial era implementar uma função para cálculo de desconto em compras e criar testes para validar seu funcionamento, conforme foi a atividade da aula ao vivo 2.

## Funcionalidades

- **Cálculo de desconto:**  
  Função que recebe o valor da compra e o percentual de desconto, retornando o valor final com desconto aplicado.  
  Arquivo: [`src/calculoDesconto.js`](src/calculoDesconto.js)  
  Testes: [`tests/desconto.test.js`](tests/desconto.test.js)

## Informação Extra

Além do exercício proposto, foi adicionada mais uma funcionalidade ao desafio:  
**Simulação de compras parceladas**, incluindo cálculo de acréscimo de juros para compras acima de 5 parcelas.  
Arquivo: [`src/calculaParcelas.js`](src/calculaParcelas.js)  
Testes: [`tests/parcelas.test.js`](tests/parcelas.test.js)

Criei dois scripts NPM para execução dos testes, sendo eles:

`npm run test-desconto` e `npm run test-parcelas`


Fique à vontade pra clonar o projeto e adicionar seus testes em desconto.test.js e parcelas.test.js
