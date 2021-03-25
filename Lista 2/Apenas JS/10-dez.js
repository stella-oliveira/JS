/* 10. Escreva um programa que pergunte o raio de uma circunferência, e sem seguida mostre o diâmetro, 
comprimento e área da circunferência. */

var raio = 5;
var diametro = raio * 2;
var comprimento = 2 * 3.14 * raio;
var area = 3.14 * Math.pow(raio, 2);

console.log("O raio é",raio, ", o diâmetro é", diametro, ", o comprimento da circunferência é", comprimento.toFixed(2), "e a área da circuferência é", area);

