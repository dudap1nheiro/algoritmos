//1
const idade = 19

if(idade >= 18){
    console.log("voce pode dirigir")
}else 
    console.log("voce não pode dirigir")



//2
const turno = "m"
if (turno === "m") {
    console.log("bom dia!")
}else if (turno === "v"){
    console.log("boa tarde!")
}else if (turno === "n"){
    console.log("boa noite")
} else {
    console.log("turno invalido")
}

//3
const turno1 = "M"
switch (turno1) {
    case "M":
      console.log("Bom Dia!");
      break;
    case "V":
      console.log("Boa Tarde!");
      break;
    case "N":
      console.log("Boa Noite!");
      break;
    default:
      console.log("Turno inválido. Por favor, digite M para Matutino, V para Vespertino ou N para Noturno.");
      break;
}

4. Definindo o gênero do filme e o preço do ingresso
const generoDoFilme = prompt("Qual o gênero do filme?");
const precoDoIngresso = Number(prompt("Qual o preço do ingresso?"));

// Verificando se o filme é do gênero fantasia e o preço do ingresso é abaixo de 15 reais
if (generoDoFilme.toLowerCase() === "fantasia" && precoDoIngresso < 15) {
  console.log("Bom filme!");
} else {
  console.log("Escolha outro filme.");
}