function calcular() {
    let = num = document.getElementById('txtn')
    let tab = document.getElementById('tabuada')

    if (num.value.length == 0) {
        window.alert('[ERRO] DIGITE UM NÚMERO')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c<= 20){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            c++
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}