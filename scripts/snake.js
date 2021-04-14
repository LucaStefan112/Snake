class Snake {
  constructor(width, height) {
    this.body = [];
    this.body[0] = createVector(floor(width / 2), floor(height / 2));
    this.xdir = 0;
    this.ydir = 0;
  }
  
  update(food) {
    
    let lastPoz = createVector(this.body[this.body.length - 1].x, this.body[this.body.length - 1].y);
    
    for(let i = this.body.length - 1; i > 0; i--){
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    
    this.body[0].x += this.xdir;
    this.body[0].y += this.ydir;
    
    if(floor(food.x) == floor(this.body[0].x) && floor(food.y) == floor(this.body[0].y))
      this.body = [...this.body, lastPoz];
  }
  
  show() {
    fill(0, 255, 0);
    for(let i = 0; i < this.body.length; i++)
      square(this.body[i].x, this.body[i].y, 1);
  }
}