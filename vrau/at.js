const { read } = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output:process.stdout 
})
let idade
let maior18 = 18
rl.question(`qual a idade do usuario:`, (idade) => {
    let maior18

if (idade>= maior18){
console.log("maior de idade")
}
else {console.log("nao e maior de idade")}
;
rl.close();

});
