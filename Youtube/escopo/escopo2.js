let x = 5
x = 12  // Usando o let: Consigo alterar o valor da variável ao longo do código
const y = 100

console.log(x)

if(true) {
    let x = 20

    const y = 50

    console.log(`Sou o y do if ${y}`)

    console.log(`Sou o x do if ${x}`)
}

console.log(`Sou o x do escopo global ${x}`)

console.log(`Sou o y do escopo global ${y}`)

for(let x = 0; x <10; x++) { // X local, pois foi usado o let. O let cria escopo local
    console.log(x)
}