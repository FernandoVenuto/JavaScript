var agora = new Date() // o new Date sempre será uma variavel para repassar.
var hora = agora.getHours() // Para receber a hora atual do sistema utiliza o getHours

console.log(`Agora são exatamente ${hora} horas.`)

if(hora > 24){
    console.log('[ERRO] Hora inexistente!')
}
else if(hora == 0 || hora <= 8){
    console.log ('Boa Madrugada')
}else if(hora < 12){
    console.log('Bom dia')
}else if (hora < 18){
    console.log('Boa tarde')
}else{
    console.log('Boa noite')
}