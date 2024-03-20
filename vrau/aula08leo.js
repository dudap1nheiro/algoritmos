const readline = require ('readline')

//criando uma instancia de interface de leitura e escrita

const rl = readline.createInterface({
    input: process.stdout
});

//solicitando ao usuario que insira sua idade
rl.question('qual sua idade?'), (idade) => ({
    //exibindo a idade inserida pelo usuario
    console.log('sua idade e:', idade);

    //fechando a interface de leitura
    rl.close();
});