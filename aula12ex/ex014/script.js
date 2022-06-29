function carregar() {
    var msg = window.document.getElementById("msg") // Pegando dado do html
    var foto = window.document.getElementById("imagem") //Pegando dado do html
    var data = new Date() //método data 
    var hora = data.getHours() //Pegando a hora atual do sistema
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //Bom dia 
        foto.src= "manha-recortada.png"
        window.document.body.style.background = "rgb(218, 165, 32)"
    } else if (hora >= 12 && hora <18) {
        // Boa tarde
        foto.src = "tarde-recortada.jpg"
        window.document.body.style.background = "#9DB2C7"
    } else {
        // Boa noite
        foto.src = "noite-recortada.jpg"
        window.document.body.style.background = "#04244B"
    }
}
