/* 16. Faça um programa que receba a idade de uma pessoa e mostre mensagem informando “maior de idade”, “menor de idade” 
ou "idoso(a)". Considere a idade a partir de 18 anos como maior de idade. */

function verificarIdade (idade) {
	(idade < 18) ? resultado = "Menor de idade!" : (idade >= 18 && idade <= 65) ? resultado = "Maior de idade!" : resultado = "Idoso!";
	return resultado;
}

console.log(verificarIdade(24));