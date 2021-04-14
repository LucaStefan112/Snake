class Food {
  constructor(width, height) {
    this.x = null;
    this.y = null;
  }
  
  update(snake, boundaryX, boundaryY) {
    if(floor(snake.body[0].x) == floor(this.x) && floor(snake.body[0].y) == floor(this.y)){
      let ok = false;
      
      while(!ok){
        ok = true;
        this.x = floor(random(boundaryX)); this.y = floor(random(boundaryY));
        
        for(let i = 0; i < snake.body.length && !ok; i++)
          ok = (floor(this.x) == floor(snake.body[i].x) && floor(this.y) == floor(snake.body[0].y)) ? true : ok;
      }
    }
  }
  
  show() {
    fill(255, 0, 0);
    square(this.x, this.y, 1);
  }
}