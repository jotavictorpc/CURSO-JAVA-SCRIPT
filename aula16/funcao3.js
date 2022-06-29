function fatorial(n) {
    let fat = 1    // Variável para sair o resultado
    for (let c = n  ; c > 1 ; c -=1) {   // variável c vai receber a variável n

        fat = fat * c
    }
    return fat
}

console.log(fatorial(5))   // n é a chamada