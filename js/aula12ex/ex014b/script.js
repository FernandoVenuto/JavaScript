function verificar(){
    const datinha = new Date()
    const dataformatada = datinha.toLocaleDateString('pt-br',{
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',}
        )

    var dataFormatada = dataformatada
        
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else if( Number(fano.value) <= 1922){
        window.alert(` [ERRO] É impossivel você ter nascido em ${fano.value} e estar vivo`)
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        var teste = document.createElement('p')
        teste.setAttribute('p', `${dataFormatada}`)
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src' , 'M-bebe.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src' , 'M-jovem.png')
            }else if (idade <50){
                //Adulto
                img.setAttribute('src' , 'M-Adulta.png')
            }else{
                //idoso
                img.setAttribute('src' , 'M-idoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src' , 'F-bebe.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src' , 'F-jovem.png')
            }else if (idade <50){
                //Adulto
                img.setAttribute('src' , 'F-adulta.png')
            }else{
                //idoso
                img.setAttribute('src' , 'F-idosa.png')
            }
        }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        res.appendChild =(teste)
    }
}