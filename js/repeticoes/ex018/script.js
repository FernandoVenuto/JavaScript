function dividir(){

    let numero = document.getElementById('txtn')
    let res = document.getElementById('res')
    

    if(numero.value.length == 0){
        window.alert('[ERRO} DIGITE UM NUMERO!')
    }else{
        let n = Number(numero.value)
        c= 1
        res.innerHTML = ''
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n/c}`
            c++
            res.appendChild(item)
        }
    }
}