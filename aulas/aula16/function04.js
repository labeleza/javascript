function fatorial(num=0) {
    let fat = 1
    for (c = num; c > 1; c--) {
        fat *= c
    }
    return fat
}

let fat = fatorial(5)
console.log(`${fat}`)
