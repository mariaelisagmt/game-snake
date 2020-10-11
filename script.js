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
//Comida
let food = {
    x: Math.floor(Math.random() * 15 + 1) *  box,
    y: Math.floor(Math.random() * 15 + 1) * box
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

//Comidinha
function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

//Eventos de movimentação
document.addEventListener('keydown', update);

function update(event) {
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

//Main
function iniciarJogo() {

    //Condições para ultrapassar parede
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    //Condição de parada
    for (i = 1; i <snake.length; i++) {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    //Chamada de funções 
    criarBG();
    criarCobrinha();
    drawFood();

    //Posição inicial
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //Condicionais para tamanho da cobrinha
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){    
        snake.pop();
    }
    else {
        food.x = Math.floor(Math.random() * 15 + 1) *  box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    //Pesquisar
    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);
