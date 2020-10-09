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

//Função de movimentação
let direction = "right";

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

//Main
function iniciarJogo() {
    criarBG();
    criarCobrinha();

    //Posição inicial
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //Condicionais
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    //Pesquisar
    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);
