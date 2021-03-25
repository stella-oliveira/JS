/* 17. Escrever um programa que leia o nome e o sexo de uma pessoa e informe o nome e se ela é homem ou mulher. */

function nomeEsexo (nome,sexo) {
	if (sexo == 'F' || sexo == 'f' || sexo == 'FEMININO' || sexo == 'feminino' || sexo == 'fem') {
		resultado = "Mulher";
	} else {
		resultado = "Homem";
	}
	return "Nome: " + nome + " / Sexo: " + resultado;	
}

console.log(nomeEsexo("Stella","F"));