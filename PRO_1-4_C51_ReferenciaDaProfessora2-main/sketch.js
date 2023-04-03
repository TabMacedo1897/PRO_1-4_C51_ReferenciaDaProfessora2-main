var bg, bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

function preload() {
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");

  zombieImg = loadImage("assets/zombie.png");

  bgImg = loadImage("assets/bg.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //adicionar a imagem de fundo
  bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20);
  bg.addImage(bgImg);
  bg.scale = 1.1;

  //criar o sprite do jogador
  player = createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
  player.addImage(shooterImg);
  player.scale = 0.3;
  player.debug = true;
  player.setCollider("rectangle", 0, 0, 300, 300);

  //criar sprites para representar as vidas restantes

  //criar o grupo para os zumbis
}

function draw() {
  background(0);

  //mover o jogador para cima e para baixo e tornar o jogo compatível com dispositivos móveis usando touches (toques)
  if (keyDown("UP_ARROW") || touches.length > 0) {
    player.y = player.y - 30;
  }
  if (keyDown("DOWN_ARROW") || touches.length > 0) {
    player.y = player.y + 30;
  }

  //disparar as balas e mudar a imagem do atirador para a posição de tiro quando a tecla espaço for pressionada
  if (keyWentDown("space")) {
    player.addImage(shooter_shooting);
  }

  //o jogador volta à imagem original quando paramos de pressionar a tecla espaço
  else if (keyWentUp("space")) {
    player.addImage(shooterImg);
  }

  //destruir o zumbi quando o jogador toca nele
  if (zombieGroup.isTouching(player)) {
    for (var i = 0; i < zombieGroup.length; i++) {
      if (zombieGroup[i].isTouching(player)) {
        zombieGroup[i].destroy();
      }
    }
  }

  //chamar a função para gerar os zumbis

  drawSprites();
}
