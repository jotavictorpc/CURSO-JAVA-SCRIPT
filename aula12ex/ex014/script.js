function carregar(){
    var msg = document.getElementById("msg") // Deve ser o id. Se for o className ou query, não vai funcionar

    var img = document.getElementById("imagem") // Deve ser o id. Se for o className ou query, não vai funcionar
    
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >=5 && hora <12) {
         msg.innerHTML = `Bom dia. São ${hora} horas`
         img.src = "manha-recortada.png"
         document.body.style.backgroundColor = "rgb(245, 245, 6)"
    } else if(hora >=12 && hora <18) {
        // Boa tarde
        msg.innerHTML = `Boa tarde. São ${hora} horas`
        img.src = "tarde-recortada.jpg"
        document.body.style.backgroundColor = "gray"
    } else if(hora >= 18 && hora < 23.59) {
        // Boa noite
        msg.innerHTML = `Boa noite. São ${hora} horas`
        img.src = "noite-recortada.jpg"
        document.body.style.backgroundColor = " rgba(0, 0, 0, 0.539)"
    } else if(hora >= 0 && hora <5) {
        // Boa madrugada
        msg.innerHTML = `Boa madrugada. São ${hora} horas`
        img.src = "noitee-recortada.jpg"
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.800)"
    }

}

