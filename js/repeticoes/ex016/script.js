
function contar() {
    let ninicio = document.getElementById('ninicio')
    let nfinal = document.getElementById('nfinal')
    let incremento = document.getElementById('incremento')
    let res = document.getElementById('res')

    if (ninicio.value.length == 0 || nfim.value.length == 0 || incremento.value.length == 0) {
        window.alert('[ERRO] Faltam Dados!')
        res.innerHTML = `Impossivel contar!`
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(ninicio.value)
        let f = Number(nfim.value)
        let p = Number(incremento.value)
        
        if (p <= 0) {
            alert('Não existe Passo 0, você é burro por acaso? Será considerado 1')
            p=1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} `
            }
        } else { //Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} `
            }
        }
    }
}