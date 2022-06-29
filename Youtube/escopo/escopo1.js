var x = 1
var y = 3
console.log(x,y)   // Escopo global

function teste() {
    var z = 0   // Escopo local da função teste()
    console.log(`Teste function ${z}`)

    console.log(x) // Variável CRIADA COM VAR, consigo acessar no local
}

teste()

console.log(z) // variável local não pode ser acessada do global. O inverso é possível



function testando() {
    var z = 5  // Escopo local, pois é uma fun
    console.log(`Testando function ${z}`)
}

testando()
