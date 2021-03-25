/* 3. Faça um programa que receba o peso de uma pessoa em quilos, calcule e mostre esse peso em gramas. */

function calcularPeso (peso) {
	calculo = peso * 1000;
	return calculo;
}

console.log("Peso em gramas:", calcularPeso(90));