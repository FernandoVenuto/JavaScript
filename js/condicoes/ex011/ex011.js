var idade = 67

console.log(`Você possui ${idade}`)

if(idade < 16){
    console.log('Você não pode votar!')
}else if(idade < 18 || idade > 65){
    console.log('O seu voto é opcional!')
}else{
    console.log('O seu voto é obrigatorio!')
}


