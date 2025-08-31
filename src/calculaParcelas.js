let valorParcela = ''
let taxa = ''
let acrescimo = ''
let juros = ''

/**
 * 
 * @param valor Valor da compra
 * @param taxa Taxa de juro 
 * @returns Valor da compra com a taxa de juro aplicada se for o caso
 */
function calculaJuro(valor, taxa){
    if(valor <= 0 || taxa <=0){
        console.log('Verifique os valores informados e tente novamente.')
        return
    }
    juros = (valor * taxa) /100 
    let valorCorrigido = (valor + juros)
    return valorCorrigido
}

/**
 * 
 * @param valor Valor do produto
 * @param parcelas Número de parcelas (se for maior que 5 será taxado em 10%)
 * @returns valor de cada parcela
 */
function calculaParcelas(valor, parcelas){
    if(valor <= 0 || parcelas <= 0){
        console.log('Verifique os valores informados e tente novamente.')
        return
    }

    if(parcelas >= valor){
        console.log('O número de parcelas deve ser menor que o valor. Tente novamente')
        return
    }

    if(parcelas > 5){
        taxa = 10
        valorComJuros = calculaJuro(valor, taxa)
        valorParcela = Math.floor(valorComJuros/parcelas)
        console.log(`Sua compra de R$${valor} vai ser parcelada em ${parcelas}x de R$${valorParcela}. Acréscimo de ${taxa}%`)
    }else{
        valorParcela = Math.floor(valor/parcelas)
        console.log(`Sua compra de R$${valor} vai ser parcelada em ${parcelas}x de R$${valorParcela} sem acréscimo`)
    }
}

module.exports = { calculaParcelas, calculaJuro }