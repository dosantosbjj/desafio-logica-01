const { compraComDesconto } = require('../src/calculoDesconto')

//Compra de R$1.000,00 com 30% de desconto
compraComDesconto(1000,10)

//Compra de R$100,00 com 3% de desconto
compraComDesconto(100,3)

//Compra de R$70.000,00 com 18% de desconto
compraComDesconto(70000,18)

//Compra de R$2.000,00 com 101% de desconto -> falha de validação
compraComDesconto(2000,101)

//Compra de R$15.000,00 com -50% de desconto -> falha de validação
compraComDesconto(15000,-50)

//Compra de R$0 com 10% de desconto -> falha de validação
compraComDesconto(0,10)

//Compra de R$-100,00 com -10% de desconto -> falha de validação
compraComDesconto(-100,-10)