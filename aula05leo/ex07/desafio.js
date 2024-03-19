const generoFilme = "fantasia";
const precoIngresso = 10;
let snack;

console.log("Qual snack que você quer comprar?");

if (generoFilme === "fantasia" && precoIngresso < 15) {
  snack = "pipoca";
} else if (generoFilme === "comédia" && precoIngresso < 15) {
  snack = "chocolate";
} else if (generoFilme === "terror" && precoIngresso >= 15) {
  snack = "sorvete";
} else if (generoFilme === "ação" && precoIngresso >= 15) {
  snack = "refrigerante";
}

console.log("Bom filme!");
console.log(`Aproveite a sua ${snack}`);
