const variavel1 = 50
const variavel2 = 35
// igual: ===
console.log(variavel1) === (2*25) //true
console.log(variavel1 === 50) //true
console.log(variavel1 === variavel2) //false

//diferente:!==
console.log(variavel1 !== variavel2)

//maior: >
// verifica se o valor da esquerda e maior que o da direita
console.log(variavel1 > variavel2) //true
console.log(variavel2 > variavel1) //false

// maior ou igual: >=
// verifica se o valor da esquerda e maior ou igual o da direita
console.log(variavel1 >= variavel2)
console.log(50 >= 35) //true
console.log(50 >= 50) //true
console.log(35 >= 50) //false

//menor <
//verifica se o valor da esquerda e menor que o da direita
console.log(variavel1 < variavel2) //false
console.log(23 < 90) //true

//menor ou igual
//verifica se o valor da esquerda e menor ou igual o da direita
console.log(variavel1 <= variavel2) //false
console.log(23 <= 50) //true


