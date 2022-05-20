function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var ola = window.document.getElementById('ola')
    var data = new Date()
    var hora  = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora< 12 ){
        // Bom dia
        ola.innerHTML = 'Olá! Bom dia!'
       img.src = 'manha.png'
       document.body.style.background = '#efdfcd'
    }else if (hora >= 12 && hora < 18){
        // Boa Tarde
        ola.innerHTML = 'Olá! Boa Tarde!'
        img.src = 'tarde.png'
        document.body.style.background = '#c9826f'
    }else{
        //Boa Noite
        ola.innerHTML = 'Olá! Boa Noite!'
        img.src = 'noite.png'
        document.body.style.background = '#353535'
    }

}