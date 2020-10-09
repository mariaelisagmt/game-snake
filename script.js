let canvas = document.getElementById("snake");
//Renderiza o desenho dentro do canvas. 
let context = canvas.getContext("2d");
let box = 32;
//Cobrinha
let snake = [];
//Estrutura cobrinha
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG() {
    //Cor do fundo
    context.fillStyle = "lightgreen";
    //Desenha o retangulo do jogo
                    //x, y, altura, largura
    context.fillRect(0, 0, 16 * box, 16 * box);
}

//Estrutura da cobrinha será um array, no qual será inserido o primeiro e retirado o ultimo
function criarCobrinha(){
    for(i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}


criarBG();
criarCobrinha();