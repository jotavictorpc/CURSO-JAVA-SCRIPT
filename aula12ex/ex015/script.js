function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("cnasc")
    var res = document.querySelector("#res")

    if(fano.value.length == 0 ||Number(fano.value) > ano ) {
        window.alert("[ERRO] Verifique os dados")
    } else {
        var fsex = document.getElementsByName("sexo")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            genero = "Mulher"
            if(idade >= 0 && idade <6) {
                //criança
                img.setAttribute("src","crianca-5anos-mulher-R.jpg")
            } else if(idade <10) {
                //pré-adolescente
                img.setAttribute("src","mulher-filha-R.jpg")
            }else if (idade <18) {
                // Adolescente
                img.setAttribute("src","mulher-jovem-R.jpg")
            } else if (idade <30) {
                // Adulta
                img.setAttribute("src","mulher-adulta-30-R.jpg")
            } else if (idade <45) {
                // Transição
                img.setAttribute("src","mulher-adulta-45-R.jpg")
            } else if (idade <150) {
                // idosa
                img.setAttribute("src","mulher-idosa-R.jpg")
            }
        } else if(fsex[1].checked) {
            genero = "Homem"
            if(idade >= 0 && idade <6) {
                //criança
                img.setAttribute("src","crianca-4anos-homem-R.jpg")
            } else if(idade <10) {
                //pré-adolescente
                img.setAttribute("src","homem-filho-10-R.jpg")
            }else if (idade <18) {
                // Adolescente
                img.setAttribute("src","homem-jovem-18-R.jpg")
            } else if (idade <30) {
                // Adulto
                img.setAttribute("src","homem-adulto-25-R.jpg")
            } else if (idade <45) {
                // Transição
                img.setAttribute("src","homem-adulto-45-R.jpg")
            } else if (idade <150) {
                // idoso
                img.setAttribute("src","homem-idoso-R.jpg")
            }
        }
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        res.appendChild(img)
    }
}