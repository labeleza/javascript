let num = document.querySelector('#fnumero')
let lista = document.querySelector('#flista')
let resultado = document.querySelector('#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionarNum() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        resultado.innerHTML = ""
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert("Adicione valores antes de finalizar!")
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let média = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } else if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        média = soma / total
        
        resultado.innerHTML = ""
        resultado.innerHTML += `<p><br>Ao todo temos ${total} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor adicionado foi o ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor adicionado foi o ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores é ${média.toFixed(2)}.</p>`
    }
}

function limparInputs() {
    num.value = ""
}