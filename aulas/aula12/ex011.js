let idade = 65

console.log(`Você tem ${idade} anos! Portanto seu voto é: `)
if (idade < 16) {
    console.log('Ops! Você não pode votar!')
} else if (idade < 18 || idade >= 65) {
    console.log('Opcional!')
} else {
    console.log('Obrigatório!')
}