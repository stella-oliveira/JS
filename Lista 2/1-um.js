/* 1. O restaurante a quilo Bem-Bão cobra R$12,00 por cada quilo de refeição. 
Escreva um programa que leia o peso do prato montado pelo cliente (em quilos) e imprima o valor a pagar. */

function restaurante (refeicao) {
	pagar = refeicao * 12;
	return pagar;
}

console.log("Valor a pagar: R$", restaurante(0.5));