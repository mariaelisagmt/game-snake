let canvas = document.getElementById("snake");
//Renderiza o desenho dentro do canvas. 
let context = canvas.getContext("2d");
let box = 32;

function criarBG() {
    //Cor do fundo
    context.fillStyle = "lightgreen";
    //Desenha o retangulo do jogo
                    //x, y, altura, largura
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();