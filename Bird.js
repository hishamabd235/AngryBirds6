class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.track = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var position = [this.body.position.x,this.body.position.y]
    this.track.push(position)
    for(var i=0;i<this.track.length;i++){
      image(this.smoke,this.track[i][0],this.track[i][1])
    }
    super.display();
  }
}
