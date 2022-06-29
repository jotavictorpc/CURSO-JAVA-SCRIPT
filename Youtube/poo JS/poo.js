class livro {                       // Classe
    constructor(Nome, Editora, Paginas){
        this.__Nome = Nome
        this.__Editora = Editora          // Atributo
        this.__Paginas = Paginas       //__ só nomenclatura para dizer que é algo interno à class
    }

    anuntit() {
        return `${this.__Nome} é o título do livro`   // Método
    }

    desctit() {
        return `O ${this.__Nome} é um livro de estudo muito bom, com ótima didática. Ele tem ${this.__Paginas} páginas`    // Método
    }
}


const livro1 = new livro("Calculo", "CL-CALCULOS", 560)
const livro2 = new livro("Física 2", "Jhon - Físico", "324")

console.log(livro1.anuntit()) // Apliquei o console.log, pois dentro do método anuntit só tem o return (retorno da função)
console.log(livro1.desctit())

console.log(livro1.__Nome) // Pegar o nome do primeiro livro (parecido com array)

console.log(livro2.anuntit())
console.log(livro2.desctit())  // Apliquei o console.log, pois dentro do método anuntit só tem o return (retorno da função)
