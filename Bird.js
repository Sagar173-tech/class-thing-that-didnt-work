class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    console.log(this.trajectory);
    if(this.body.velocity.X > 10 && this.body.position.x > 200) {
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
    
    
        //alert(trajectory.length)
        for(var i = 0; i < this.trajectory.length; i ++) {
          image (this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        }
      }
    }
