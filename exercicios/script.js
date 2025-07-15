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