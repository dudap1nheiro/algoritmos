Verificando se o filme é do gênero fantasia e o preço do ingresso é abaixo de 15 reais
if (generoDoFilme.toLowerCase() === "fantasia" && precoDoIngresso < 15) {
  console.log("Bom filme!");
} else {
  console.log("Escolha outro filme.");
}