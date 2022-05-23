<?php 
$idade  = 17;
echo('<p>Você possui ' .  $idade . '</p>' );

if( $idade < 16 ){
    echo('Você não pode votar!');
}else if($idade < 18 || $idade > 65 ){
    echo ('O seu voto é opcionaL!');
}else{
    echo ('O seu voto é obrigatorio');
}