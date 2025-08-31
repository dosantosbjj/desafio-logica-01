const { calculaParcelas } = require("../src/calculaParcelas")

// Compra de 100 reais parcelada em 5x
calculaParcelas(100,5)

//Compra de R$30.000,00 parcelada em 12x (taxa de 10% acima de 5 parcelas)
calculaParcelas(30000,12)

//Compra de R$1200 parcelada em 3x
calculaParcelas(1200,3)

//Compra de R$100 parcelada em -1x -> falha de validação
calculaParcelas(100,-1)

//Compra de R$0 parcelada em 10x -> falha de validação
calculaParcelas(0,10)

//Compra de R$-500,00 parcelada em 5x -> falha de validação
calculaParcelas(-500,5)


//Compra de R$1.000,00 em 0x -> Falha de validação
calculaParcelas(1000,0)