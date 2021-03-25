/* 13. Crie um programa que peça um número ao usuário e armazene ele na variável x. 
Depois peça outro número e armazene na variável y. Mostre esses números. 
Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x. */

var x = 7;
var y = 13;

console.log("X =", x);
console.log("Y =", y);

var aux = 0;
aux = x;
x = y;
y = aux;

console.log("Troca:")
console.log("X =", x);
console.log("Y =", y);