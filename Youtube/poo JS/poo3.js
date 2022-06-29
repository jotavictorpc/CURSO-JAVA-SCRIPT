class carro {
    constructor(nome, cor, valor, ano, velocidadeMax) {
        this.nome = nome,
        this.cor = cor,
        this.valor = valor,
        this.ano = ano,
        this.velocidadeMax = velocidadeMax
    }

    pegarAnoEnome() {
        console.log(`O nome do carro é ${this.nome} e o ano é ${this.ano}`)
    }

    pegarNomeAnoEvelmax() {
        console.log(`O nome do carro é ${this.nome}, o ano dele é ${this.ano} e a velocidade máxima ${this.velocidadeMax}`)
    }
}

const carro1 = new carro("Saveiro", "Vermelha", "80,000", 2021, "220km/h")

var carro2 = new carro("Corola", "Preto", "90k", 2022, "230km/h")

console.log(carro1)
carro1.pegarAnoEnome() // Fiz assim porque dentro do método já tinha o console.log


console.log(carro2)
carro2.pegarNomeAnoEvelmax() // Fiz assim porque dentro do método já tinha o console.log
