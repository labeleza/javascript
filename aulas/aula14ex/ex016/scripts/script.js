function contar() {
    let inicio = document.querySelector("#txtinicio")
    let fim = document.querySelector("#txtfim")
    let passo = document.querySelector("#txtpasso")
    let contagem = document.querySelector("#contagem")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("Erro! Está faltando alguns dados.")
    } else {
        contagem.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert("Passo inválido! Considerando PASSO 1.")
            p = 1
        }
        if (i <= f) {
            // Contagem crescente
            for (c = i; c <= f; c += p) {
                contagem.innerHTML += `${c}, `
            }
        } else {
            // Contagem decrescente
            for (c = i; c >= f; c -= p) {
                contagem.innerHTML += `${c}, `
            }
        }
        contagem.innerHTML += `Fim da contagem!`
    }
}

function limpar() {
    let inicio = document.querySelector("#txtinicio")
    let fim = document.querySelector("#txtfim")
    let passo = document.querySelector("#txtpasso")
    let contagem = document.querySelector("#contagem")

    if (inicio.value.length > 0 || fim.value.length > 0 || passo.value.length > 0) {
        inicio.value = " "
        fim.value = " "
        passo.value = " "
        contagem.innerHTML = "Preparando a contagem..."
    }
}