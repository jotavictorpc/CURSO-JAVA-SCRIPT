function tabuada() {
    var num = document.getElementById("cnum")
    var tab = document.querySelector("#ccaixa")


    if (num.value.lenght == 0) { /*Se a quantidade de números for (valor, tiver valor) 0, faça...*/
        window.alert("Por favor, digite um número")
    }else {
        let numero = Number(num.value)
        tab.innerHTML = "" /*Limpar a tabuada quando for colocar outro número para exibir a tabuada*/
        var c = 1
        while(c <=10) {
            let item = document.createElement("option")
            item.text = `${numero} x ${c} = ${numero*c}` /*A tabuada. Inserir conteúdo na tag (.text)*/
            item.value = `tab${c}` /*Selecionar a linha de uma tabuada. Muito importante*/
            tab.appendChild(item) /*Adicione o filho item na tab(tabela) em cada loop (cada rodada)*/
            c += 1 
        }
    }
}