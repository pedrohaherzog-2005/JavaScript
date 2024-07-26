function Contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Ops faltam dados, preencha os campos abaixo corretamente!'
    } else if (passo <= 0) {
        res.innerHTML = 'Algo deu errado, tente novamente digitando no campo passo um número que não seja menor ou igual a zero.'
        p = 1
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        res.innerHTML = 'Contando: <br>'
        if (i < f) { //Contagem Crescente:
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }

        } else if(i > f) { //Contagem Regressiva:
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F448}`
            }
        }
        res.innerHTML += `Fim\u{1F3C1}`
    }
}