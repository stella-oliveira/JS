/* 2. Faça um programa que receba dois números, calcule e mostre a divisão do primeiro número pelo segundo.
Sabe-se que o segundo número não pode ser zero. */

function divisao (num1,num2) {
	(num2 != 0) ? resultado = num1/num2 : resultado = ("Não é possível dividir por 0");
	return resultado;
}

console.log("Resultado:", divisao(80,0));