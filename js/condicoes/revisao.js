function verificar(){
var id = document.getElementById('id')
var idade = Number(id.value)
var data = new Date()
var ano = data.getFullYear()
var res = document.getElementById('res')

var idade = ano - Number(id.value)

if(id.value.length == 0 || Number(id.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
}else if(idade <= 12){
    res.innerHTML = `Você ainda é criança, possui apenas ${idade}`
}else if(idade <= 18){
    res.innerHTML = `Você já é um adolescente e possui ${idade}`
}else if (idade <= 29){
    res.innerHTML = `Você já é adulto, possui ${idade}`
}else if (idade <= 49){
    res.innerHTML = `Você já é um adulto experiente possui ${idade}`
}else{
    res.innerHTML = `Você já é um idoso, possui ${idade}`
}

}

function checar(){
    var txtp = document.getElementById('txtp')
    var pais = String(txtp.value)
    var resp = document.getElementById('resp')

    if(txtp.value.length == 0){
        window.alert('[ERRO} Preencha o campo!')
    }
    else if(pais == 'Brasil'){
        resp.innerHTML = `Se você nasceu no(a) Brasil você é brasileiro`
    }else{
        resp.innerHTML= `Se você masceu no(a) ${pais} você é estrangeiro`
    }
}