// Exercícios de Lógica de Programação
// Exercícios de Laços - FOR 
// Nivel Fácil

// 1 Imprimir números de 1 a 10

for (let i = 1 ; i <= 10 ; i ++){
	console.log (i)
    }

// 2 Imprimir números pares de 2 a 20

for (let i = 2 ; i <= 20 ; i += 2){     //Aqui +=2 significa que o incremento é de 2 em 2
	console.log (i)
    }
 
// 3 Imprimir números ímpares de 1 a 19

for (let i = 1 ; i <= 19 ; i += 2){
	console.log (i)
    }
 
// 4 Exibir a tabuada do número 5 até 50

for (let i = 1 ; i <= 10 ; i++){
	console.log ("5 X " + i + " = " + (5*i))  // Aqui uso concatenação
    }
    
for (let i = 1 ; i <= 10 ; i++){
	console.log (`5 x ${i} = ${5*i}`)  // Aqui uso template string. String template é uma forma de interpolação de strings que permite incluir expressões dentro de strings usando a sintaxe `${expressão}`.
    }
    
 // 5 Contar de 10 a 1

for (let i = 10 ; i >= 1 ; i--){
	console.log (i)
    }

// 6 Somar números de 1 a 100
let soma = 0
for (let i = 1; i <=100 ; i++){
	soma += i
    }
    console.log (soma)

 // 7 Contar múltiplos de 3 entre 1 e 50
for (let i = 1 ; i <=50 ; i++){                   
    if (i%3===0);
    console.log (i)
}
 


// Para saber quantos múltiplos de 3 existem entre 1 e 50, podemos usar um contador
//let contador = 0;
//for (let i = 1; i <= 50; i++) {
//if (i % 3 === 0) {
//contador++;
//}
//}
//console.log("Total de múltiplos de 3 entre 1 e 50:", contador);



// 8 Imprimir os quadrados de 1 a 10
    
 for (let i = 1; i<=10 ; i++){
	let quadrado = i*i
    console.log (quadrado)}  


 // Outra forma de fazer o mesmo exercício, usando a função Math.pow para calcular o quadrado   
//for (let i = 1; i<=10 ; i++){
//	console.log (`${i}² = ${Math.pow (i,2)}`)}  //Math.pow(base, expoente) é uma função que retorna a base elevada ao expoente especificado.


// 9 Contar números divisíveis por 5 até 100

for (let i = 5; i<=100 ; i++){
    if (i%5===0)
        console.log (i)
        }

// 10 Imprimir "Olá" 10 vezes
for (let i = 1; i <= 10; i++) {
    console.log("Olá");
}

// 11 Múltiplos de 2 e 3 até 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i);

// 12 Somar apenas pares até 100
let somaPares = 0
for (let i = 1 ; i <= 100 ; i++){
	if (i % 2 === 0){
    somaPares += i
    console.log (i)}
    }
    console.log ("A soma dos pares de 1 a 100 é: " + somaPares);
}}

// 13 Imprimir de 100 a 1
for (let i = 100; i >= 1; i--) {
    console.log(i);
}   

// 14 Contar de 0 a 100 de 5 em 5
for (let i = 0 ; i<= 100 ; i+=5 ){
    console.log (i)             
}

// 15 Linha de asteriscos
let linha = ""
for (let i = 1; i <= 10; i++) {
    linha += "*"; // Adiciona um asterisco à linha
}       
console.log(linha); // Imprime a linha de asteriscos

// 16 Pares de um array
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];      
for (let i = 0; i < numeros.length; i++) {  //numeros.length retorna o tamanho do array
    if (numeros[i] % 2 === 0) { // Verifica se o número é par | numero[i] é o elemento do array
        console.log(numeros[i]); // Imprime o número par
    }   
}


