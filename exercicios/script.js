// 1 - Soma simples
function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado1").innerText = "Resultado: " + (n1 + n2);
}
//2
function idade(){
    let idade = Number(document.getElementById("idade").value);
    if(idade >=18){
        document.getElementById("maiorIdade").innerText = "Maior de idade";
    }
    else{
        document.getElementById("maiorIdade").innerText = "Menor de idade";
    } 
}
//3
function contarCaracteres() {
    let texto = (document.getElementById("texto").value);
    let resultado = (document.getElementById("resultado3"));
    resultado.textContent = "Total de caracteres: " + texto.length;
}
//4
function verificar(){
    let numero = Number(document.getElementById("numero").value);
    if(numero % 2 == 0){
        document.getElementById("resultado4").innerText = "Par";
    }
    else{
        document.getElementById("resultado4").innerText = "Impar";
    } 
}
//5
function caixaAuta() {
    let texto = (document.getElementById("texto5").value);
    let resultado = (document.getElementById("resultado5"));
    resultado.textContent = "Caixa alta: " + texto.toUpperCase();
}
//6
function comparar(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    if(numero1 > numero2){
        document.getElementById("resultado6").innerText = "Maior numero: " + numero1;
    }
    else{
        document.getElementById("resultado6").innerText = "Maior numero: " + numero2;
    } 
}
//7(feito com ajuda de ia)
function tabuada() {
    let numInput = document.getElementById("num");
    let num = parseInt(numInput.value);
    let resultadoParagrafo = document.getElementById("resultadoParagrafo");
    let conteudoTabuada = '';
    for (let count = 1; count <= 10; count++) {
        conteudoTabuada += `${num} x ${count} = ${num * count}<br>`;
    }
    resultadoParagrafo.innerHTML = conteudoTabuada;
}
//8
function contagem() {
    let contagem = document.getElementById("contagem");
    let conteudoContagem = '';

    for (let i = 1; i <= 10; i++) {
        conteudoContagem += i + "</br>";
    }
    contagem.innerHTML = conteudoContagem;
}
//9
function media(){
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);
    let resultado = (n1 + n2 + n3) / 3;
    if(resultado >= 6){
        document.getElementById("resultado9").innerText = "Aprovado ";
    }
    else{
        document.getElementById("resultado9").innerText = "Reprovado ";
    }
}
//10
function temperatura() {
    let temperatura = Number (document.getElementById("temperatura").value);
    let resultado = (document.getElementById("resultado10"));
    resultado.textContent = "Fahrenheit:" +  ((temperatura * 9/5) + 32);
}
//11
function diaSemana() {
    let inputDia = document.getElementById("numeroDia");
    let numero = Number(inputDia.value);
    let resultadoParagrafo = document.getElementById("resultado11");
    const diasDaSemana = [
        "Número Inválido",
        "Domingo",  
        "Segunda-feira",   
        "Terça-feira",    
        "Quarta-feira", 
        "Quinta-feira",    
        "Sexta-feira",     
        "Sábado"          
    ];
    if (numero < 1 || numero > 7) {
        resultadoParagrafo.textContent = "Digite um número válido entre 1 e 7.";
        return;
    }
    resultadoParagrafo.textContent = diasDaSemana[numero];
    resultadoParagrafo.className = "";
}
//12
function senha(){
    let senha = Number(document.getElementById("senha").value);
    if(senha == 1234){
        document.getElementById("senha12").innerText = "Acesso concedido";
    }
    else{
        document.getElementById("senha12").innerText = "Senha Incorreta";
    } 
}
//13
function contagemRegressiva() {
    let contagem = document.getElementById("contagemRegressiva");
    let conteudoContagem = '';

    for (let i = 10; i >= 0; i--) {
        conteudoContagem += i + "</br>";
    }
    contagem.innerHTML = conteudoContagem;
}