let valores = [5, 7, 0, 6, 9]
for (pos = 0; pos < valores.length; pos++) {
    console.log(`A posição [${pos}] tem o valor ${valores[pos]}.`)
}

// Jeito não Simplificado  
let nomes = ['Maria', 'Lucas', 'Juca', 'Flash']
for (let nome = 0; nome < nomes.length; nome++) {
    console.log(`Seu nome é: ${nomes[nome]}`)
}

// Jeito Simplificado
for (let nome in nomes) {
    console.log(`Nome: ${nomes[nome]}`)
}
