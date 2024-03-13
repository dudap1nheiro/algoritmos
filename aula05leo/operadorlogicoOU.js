//operador OU (or) ||
//retorna false se, e somente se,todos booleanos envolvidos tambem forem false

true || true // true
false || true //true
true || false //true
false || false //false

const a = true
const b = false
const c = true
console.log(a || b)//true
console.log(b || c)//true
console.log(a || c)//false
console.log(a || b || c)//true
