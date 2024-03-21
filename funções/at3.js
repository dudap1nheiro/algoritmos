const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('quais foram suas notas?', () => {
    function vrau(n1,n2,n3) {
        let media = (n1 + n2 + n3)/3
        console.log(media.toFixed(2))
    }
    vrau(5,10,8)
});
