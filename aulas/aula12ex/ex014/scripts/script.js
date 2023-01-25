
function carregar() {
    const data = new Date()
    const hora = data.getHours()
    const minutos = data.getMinutes()
    const msg = document.querySelector('#msg')
    const imagem = document.querySelector('#imagem')
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if (hora >= 0 && hora <= 12) {
        // BOM DÍA
        imagem.src = 'foto-manha.png'
        document.body.style.backgroundColor = '#2EAD65'
    } else if (hora < 18) {
        // BOA TARDE
        imagem.src = 'foto-tarde.png'
        document.body.style.backgroundColor = '#E9AB60'
    } else {
        // BOA NOITE
        imagem.src = 'foto-noite.png'
        document.body.style.backgroundColor = '#11123D'
    }
}

