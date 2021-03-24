/* 9. Escreva um programa que recebe um número inteiro e diga se é par ou ímpar. 
Use o operador matemático % (resto da divisão ou módulo) e o teste condicional if. */

function parOUimpar (num) {
	if (num % 2 == 0) {
		resultado = "Número par";
	} else {
		resultado = "Número ímpar";
	}
	return resultado;
}

console.log(parOUimpar(6));