let day = new Date().getDay()

switch (day) {
    case 0:
        day = 'Hoje é Domingo!'
        console.log(day)
        break
    case 1:
        day = 'Hoje é Segunda-feira!'
        console.log(day)
        break
    case 2:
        day = 'Hoje é Terça-feira!'
        console.log(day)
        break
    case 3:
        day = 'Hoje é Quarta-feira!'
        console.log(day)
        break
    case 4:
        day = 'Hoje é Quinta-feira!'
        console.log(day)
        break
    case 5:
        day = 'Hoje é Sexta-feira!'
        console.log(day)
        break
    case 6:
        day = 'Hoje é Sabado!'
        console.log(day)
        break
    default:
        console.log('Dia inválido!')
}
