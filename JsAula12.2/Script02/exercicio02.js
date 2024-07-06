var intervald = window.setInterval(() => {carregar()},1000);

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById("Imagem")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia, agora são ${hora}:${minuto} da manhã.`
        img.src = "Imagens/ManhãGIMP.png"
        document.body.style.background = '#eab560'
    } else if (hora >= 12 && hora <=  18) {
        msg.innerHTML = `Boa tarde, agora são ${hora}:${minuto} da tarde.`
        img.src = "Imagens/TardeGIMP.png"
        document.body.style.background = '#dd8861'
    } else if (hora > 18 && hora <= 23) {
        msg.innerHTML = `Boa noite, agora são ${hora}:${minuto} da noite.`
        img.src = "Imagens/NoiteGIMP.png"
        document.body.style.background = '#182323'
    } else if (minuto < 10) {
        minuto = msg.innerHTML = `Agora são ${hora}:0${minuto} da manhã.`
        img.src = "Imagens/ManhãGIMP.png"
        document.body.style.background = '#eab560'
    } else if (minuto < 10) {
        minuto = msg.innerHTML = `Agora são ${hora}:0${minuto} da tarde.`
        img.src = "Imagens/TardeGIMP.png"
        document.body.style.background = '#eab560'
    } else if (minuto < 10) {
        minuto = msg.innerHTML = `Agora são ${hora}:0${minuto} da noite.`
        img.src = "Imagens/NoiteGIMP.png"
        document.body.style.background = '#eab560'
    }
}