//Ex1: Quero pegar os valores digitados nos inputs
// 1º Selecioná-los lá do HTML
// 2º Criar variáveis que recebam o valor dos selecionados acima
// 3º Só mandar imprimir ou digitar no doc

const botao = document.getElementById("botao-enviar")
const inputnome = document.getElementById("cnome")
const inputemail = document.querySelector("#cmail") // O querySelector deve ser assim, com # para que o navegador saiba que é id

const formulario = document.querySelector(".form")

const itens = document.getElementById("items")

botao.addEventListener('click', function(e){
    e.preventDefault() // Vai impedir o procedimento padrão do botao do tipo submit. Ele envia e recarrega super rápido, não dando pra ver o evento

    console.log("Cliked")

    const nameValue = inputnome.value //A variável nameValue vai receber o valor da variável inputnome
    console.log(nameValue)

    const emailValue = inputemail.value
    console.log(emailValue)

    if(nameValue == "" || emailValue == "") {
        window.alert("[ERRO] Digite os campos, por favor")
    } else {
        formulario.style.background = "red" // Mudando a cor do fundo do formulario. Ele foi selecionado lá em cima

        itens.firstElementChild.textContent = nameValue // Jogando os valores dos campos em outro canto do documento
        itens.children[1].textContent = emailValue //Jogando os valores dos campos em outro canto do documento
    }
})