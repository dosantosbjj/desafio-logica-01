let valor = ''
let desconto  = ''

/**
 * 
 * @param valor Valor da compra
 * @param desconto Percentual de desconto 
 * @returns valor da compra com o desconto aplicado
 */

function compraComDesconto(valor, desconto){
    if(valor <= 0 || desconto >= 100 || desconto <= 0){
        console.log('Revise os parâmetros informados e tente novamente.')
        return
    }
    let valorDesconto = (valor * desconto) /100 
    let valorCompra = valor - valorDesconto
    console.log(`O produto de valor R$${valor} está com um cupom de ${desconto}% de desconto!!!`)
    console.log(`Com o cupom aplicado, sua compra vai custar R$ ${valorCompra}`)
}

module.exports = { compraComDesconto }