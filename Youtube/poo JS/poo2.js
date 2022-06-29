class serHumano {
    constructor(pnome, snome, idade){
        this.__pnome = pnome
        this.__snome = snome
        this.__idade = idade
    }

    nomeCompleto() {
         console.log(`O nome completo do/a cliente é ${this.__pnome} ${this.__snome}`)    // Se tivesse o return no lugar do console.log, teria que colocar assim lá em baixo "console.log(pessoa1.nomeCompleto() para exibir na tela)"
    }
}

const pessoa1 = new serHumano("Joao Victor", "Pessoa", 16)

const pessoa2 = new serHumano("Isabella", "Joaquina", 45)

pessoa1.nomeCompleto() // Fiz assim porque dentro do método já tinha o console.log

