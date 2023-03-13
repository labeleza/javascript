function parImpar(num) {
    if (num % 2 == 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}

let num = parImpar(12)
console.log(`O número é ${num}.`)