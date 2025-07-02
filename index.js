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


    
   