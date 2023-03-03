function gerarTabuada() {
    let num = document.querySelector("#numero")
    let res = document.querySelector("#resultado")
    if (num.value.length == 0) {
        alert("Erro! Verifique os dados e tente novamente.")
    } else {
        let n = Number(num.value)
        let c = 1
        res.innerHTML = " "
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tabuada${c}`
            res.appendChild(item)
            c++
        }
    }
}