function verificar() {
    const anoAtual = new Date().getFullYear()
    const anoDeNascimento = document.querySelector('#anoNascimento')
    const nascimento = parseInt(anoDeNascimento.value)
    const idade = anoAtual - nascimento
    const res = document.querySelector('#resultado')
    if (anoDeNascimento.value.length == 0 || anoDeNascimento.value > anoAtual) {
        alert('ERRO! Verifique o Ano de Nascimento e tente novamente!')
    } else {
        const sex = document.getElementsByName('sexo')
        let genero = ''
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 14) {
                // Criança
                img.setAttribute('src', './imgs/boy.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './imgs/man-jovem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './imgs/man.jpg')
            } else {
                // Idoso
                img.setAttribute('src', './imgs/old-man.jpg')
            }
        } else if (sex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 14) {
                // Criança
                img.setAttribute('src', './imgs/girl.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './imgs/women-jovem.jpg')
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', './imgs/women.jpg')
            } else {
                // Idosa
                img.setAttribute('src', './imgs/old-women.jpg')
            }
        }
        res.textContent = `Você é ${genero}, fez ou fará ${idade} anos em ${anoAtual}.`
        res.appendChild(img)
    }
}
