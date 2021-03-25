/* 4. Faça um programa que receba um número e diga se este número está no intervalo entre 100 e 200. */

function intervalo (num) {
	(num >= 100 && num <= 200) ? resultado = "Está no intervalo" : resultado = "Não está no intervalo"; 
	return resultado;
}

console.log(intervalo(105));