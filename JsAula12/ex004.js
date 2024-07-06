var horaAtual = new Date()
var hora = horaAtual.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 4 && hora < 12) {
    console.log('Bom dia senhor(a)!')
} else if (hora == 12) {
    console.log('É meio-dia agora, senhor(a)!')
} else if (hora > 11 && hora <= 18) {
    console.log('Boa tarde senhor(a)!')
} else if (hora > 18) {
    console.log('Boa noite senhor(a)!')
} else if (hora == 0) {
    console.log('É meia-noite agora, senhor(a)!')
} else if (hora > 0 && hora < 5) {
    console.log('É de madrugada agora, senhor(a)!')
}