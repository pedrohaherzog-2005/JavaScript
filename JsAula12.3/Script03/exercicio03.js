function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                // Criança
                img.setAttribute('src', 'Imagem02/bebehomem.jpg')
            } else if (idade < 29) {
                // Jovem
                img.setAttribute('src', 'Imagem02/homemjovem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'Imagem02/homemadulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'Imagem02/homemidoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                // Criança
                img.setAttribute('src', 'Imagem02/bebemulher.jpg')
            } else if (idade < 29) {
                // Jovem
                img.setAttribute('src', 'Imagem02/mulherjovem.jpg')
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'Imagem02/mulheradulta.jpg')
            } else {
                // Idosa
                img.setAttribute('src', 'Imagem02/mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}