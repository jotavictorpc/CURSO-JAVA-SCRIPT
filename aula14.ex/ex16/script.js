function contar() {
    var ini = document.getElementById("cnumini")
    var fim = document.getElementById("cnumfim")
    var passo = document.querySelector("#cpasso")
    let res = document.querySelector("#res")

    if(ini.value.length == 0 || fim.value.length ==0 || passo.value.length == 0 || passo.value <= 0) { /* Tratamento de erro*/
        window.alert("[ERRO] Faltam dados") /* Tratamento de erro*/
    } else {
        res.innerHTML = "Contando..." /* Contador começa aqui*/
        let i = Number(ini.value) /* Convertendo as variáveis de cima em outra em formato de numero*/
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f) {
            for (let c = i; c <= f; c = c + p){ /* INICIO / TESTE / INCRE*/
                res.innerHTML += ` ${c} `/* Essa parte é para inicio menor que o fim*/
            }
        } else {
            /* Contagem decrescente*/
            for (let c = i; c>=f; c = c - p){
                res.innerHTML += ` ${c} `
            }
        }
    }
}