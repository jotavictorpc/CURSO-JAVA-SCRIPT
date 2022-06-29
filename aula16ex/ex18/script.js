let num = document.querySelector("#cnum")
var lista = document.getElementById("ccaixa")
var res = document.getElementById("res")
let valores = []   // Array vazio para quando houver o adicionar, o número venha para cá também, além de ir para o select

function numero(n) {   // Validação do número. Deve estar entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true   // Não irá sair nada na tela. Só para dizer que está correto mesmo
    } else {
        return false
    }

}

function inLista(n, l) {   //Validação se o número está na lista.
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else
        return false

}


function adicionar(){              // Função com evento de adicionar
    if (numero(num.value) && !inLista(num.value, valores)){ // Testando se tá na lista. Para isso, foi criada mais duas variáveis (numero e inLista)
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    }else {
        window.alert("Valor inválido ou já adicionado na lista")
    }
    num.value = ""
    num.focus()
}  


function finalizar() {
    if(valores.length == 0) {
        window.alert("Adicione um número")
    }else{
        let tot = valores.length
        let maior = valores[0] // Na primeira rodagem, o maior sempre será o primeiro e o menor ao mesmo tempo. Por isso, colocou o primeiro número sendo o menor e maior ao mesmo tempo
        let menor = valores[0]

        let soma = 0
        let media = 0

        for(let pos in valores) { // Laço para array
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot

        res.innerHTML = ""
        res.innerHTML += `<p> Ao todo,temos ${tot} números cadastrados </p>`
        res.innerHTML += `<p> O maior número é ${maior} e o menor é o ${menor} </p>`
        res.innerHTML += `<p> A soma dos valores é ${soma} </p>`
        res.innerHTML += `<p>A média dos valores é ${media} </p>`

    }
}