let snake;
let food;
const rez = 20;
const frames = 5;

function setup() {
  let mainCanvas = createCanvas(window.innerWidth, window.innerHeight);
  Startup();
  frameRate(5);
  noStroke();
}

function keyPressed() { 
  switch (keyCode){
    case UP_ARROW:
      snake.xdir = 0;  snake.ydir = -1;
    break;
    case DOWN_ARROW:
      snake.xdir = 0;  snake.ydir = 1;
    break;
    case LEFT_ARROW:
      snake.xdir = -1;  snake.ydir = 0;
    break;
    case RIGHT_ARROW:
      snake.xdir = 1;  snake.ydir = 0;
    break;
  }
}

function draw() {  
  scale(rez);
  background(225);
  
  update();
  show();
}

function GameOver(){
  if(floor(snake.body[0].x) < 0 || floor(snake.body[0].x) > floor(width/rez - 1) || floor(snake.body[0].y) < 0 || floor(snake.body[0].y) > floor(height/rez - 1))
    return true;
  
  for(let i = 1; i < snake.body.length; i++)
    if(floor(snake.body[0].x) == floor(snake.body[i].x) && floor(snake.body[0].y) == floor(snake.body[i].y))
       return true;
       
  return false;
}

function Startup(){
  snake = new Snake(floor(width/rez), floor(height/rez));
  food = new Food(floor(width/rez), floor(height/rez));
}

function update() {
  
  frameRate(floor(frames + snake.body.length / 2));
  
  food.update(snake, floor(width/rez), floor(height/rez));
  snake.update(food);
  if(GameOver())
    Startup();
}

function show() {
  food.show();
  snake.show();
}

function clickControl(event) {
  const mapPrecision = 1000;
  let y = floor(event.clientY * mapPrecision / window.innerHeight);
  let x = floor(event.clientX * mapPrecision / window.innerWidth);

  if(x <= y && x + y < mapPrecision + 1){
    snake.xdir = -1; snake.ydir = 0;
  }
  else if(x <= y && x + y >= mapPrecision + 1){
    snake.xdir = 0; snake.ydir = 1;
  }
  else if(x > y && x + y < mapPrecision + 1){
    snake.xdir = 0; snake.ydir = -1;
  }
  else{
    snake.xdir = 1; snake.ydir = 0;
  }
}

document.addEventListener("touchStart", clickControl);
