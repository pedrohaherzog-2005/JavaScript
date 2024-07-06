var idade = 12
if (idade < 16) {
    console.log('Não pode votar')
} else if (idade >= 18 && idade <= 70) {
    console.log('Voto obrigatório')
} else if (idade < 18 && idade == 16) {
    console.log('Voto opcional')
} else if (idade > 70) {
    console.log('Voto opcional')
}