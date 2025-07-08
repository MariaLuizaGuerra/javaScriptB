// 1 - Soma simples
function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado1").innerText = "Resultado: " + (n1 + n2);
}
function idade(){
    let idade = Number(document.getElementById("idade").value);
    if(idade >=18){
        document.getElementById("maiorIdade").innerText = "Maior de idade";
    }
    else{
        document.getElementById("maiorIdade").innerText = "Menor de idade";
    }
    
}