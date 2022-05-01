
const calcular = document.getElementById('calcular');


function imc() {

const nome = document.getElementById('nome').value;
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const resultado = document.getElementById('resultado');

if(nome !== '' && altura !== '' && peso !==''){
    const valorIMC = (peso/(altura*altura)).toFixed(1);
let classificacao = '';
if (valorIMC < 18.5){
    classificacao = 'abaixo do peso  💪';
}else if(valorIMC < 25){
 classificacao = 'com peso ideal,  💪 🦾 🤘';
}else if(valorIMC < 30){
 classificacao = 'e você está levemente acima do peso  🤷‍♂️ 🧟';
}else if (valorIMC < 35){
classificacao = 'Você esta com obesidade grau 1 🕵 🕵️‍♀️'
}else if (valorIMC < 40){
classificacao = 'Você esta com obesidade grau 2 🤦 🤦'
}else{
    classificacao = 'Você esta com obesidade grau 3, Cuidado bebê 👩‍🔬👨‍🔬 '
}

resultado.textContent = `${nome} seu IMC é de ${valorIMC}  e você esta ${classificacao}`  ;
}else{
    resultado.textContent = "Preencha todos os campos 🤦‍♂️🤯🙄"}
}


calcular.addEventListener('click', imc);
