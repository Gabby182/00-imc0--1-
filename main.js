'use strict'
// calcular a função ICM 
function calcularImc(){
    const nome = document.getElementById("nome").value; 
    // criar link entre html e js, pelo ID, o js trata o html como documento ou objeto, pelo '.'. getElementoById. Com value para obter o conteúdo.
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //Validação para o nome se estiver vazios.
    if (nome === '' || altura === '' || peso === ''){
        resultado.textContent = 'Preencha todos os campos!';
    }
    else{
        const imc = peso / (altura * altura);
        let mensagem = '';
        // Classificação do IMC.
        if ( imc < 18.5){
            mensagem = 'Você está abaixo do peso.'; 
        // para gerar conteúdo de texto para dentro da tag.
        }
        else if ( imc < 25){
            mensagem = '<div class="verde">Parabéns!</div> Você está com o peso ideal.'; 
        }    
        else if ( imc < 30){
            mensagem = 'Você está com sobrepeso (acima do peso desejado).'; 
        }    
        else if ( imc < 35){
            mensagem = 'Você está com obesidade grau I.'; 
        }
        else if ( imc < 40){
            mensagem = 'Você está com obesidade grau II.'; 
        }
        else{
            mensagem = 'Você está com obesidade grau III. <div class = "vermelho">Cuidado!</div>'; 
        }

        resultado.innerHTML = `${nome} seu IMC é: ${imc.toFixed(2)}. ${mensagem}`; 
        // para gerar conteúdo de texto para dentro da tag.
    }  
}
//com o comando document crio  função getElementbyID e adiciono a captura do evento click pela escuta, addEventListener,inserir virgula para saber o que ocorre ao clicar
document.getElementById('calcular').addEventListener('click', calcularImc); 