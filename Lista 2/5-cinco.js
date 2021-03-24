/* 5. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor. Consegue criar mais de uma solução? */

/* 		PRIMEIRA SOLUÇÃO
function maiorNumero (num1,num2,num3) {
	if (num1 > num2 && num1 > num3) {
		return num1;
	} else if (num2 > num1 && num2 > num3) {
		return num2;
	} else {
		return num3;
	}
}

console.log("O maior número é", maiorNumero(700,200,41));
*/

/*		SEGUNDA SOLUÇÃO
var num1 = 5, num2 = 10, num3 = 3, aux;

if (num1 < num2) {
	aux = num1;
	num1 = num2;
	num2 = aux;
}

if (num1 < num3) {
    aux = num1;
    num1 = num3;
    num3 = aux;
}

if (num2 < num3) {
    aux = num2;
    num2 = num3;
    num3 = aux;
} 

console.log(num1 + " " + num2 + " " + num3);
*/

/*		TERCEIRA SOLUÇÃO 	*/
var num = [20,30,100];
var i, j, aux=0;

for (i = 0; i < num.length; i++) {
	for (j = i+1; j < num.length; j++){
		if (num[i] < num[j]) {
			aux = num[i];
			num[i] = num[j];
			num[j] = aux;
		}
	}
}
console.log(num);

/*		QUARTA SOLUÇÃO 	
var num1=20,num2=30,num3=40;

console.log("O maior é", Math.max(num1,num2,num3), "O menor é", Math.min(num1,num2,num3));
*/