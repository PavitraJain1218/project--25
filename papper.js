class Papper{
    constructor(x,y,radius,){
        var options={
        restitution:0.5,
        density:1.2
        }
       this.x=x
       this.y=y
       this.radius=radius
       this.body=Bodies.circle(x,y,radius,options)
    World.add(world,this.body)
    this.papperImage=loadImage("paper.png")
    }
    display(){
    ellipseMode(RADIUS)
    imageMode(CENTER)
    image(this.papperImage,this.body.position.x,this.body.position.y,this.radius,this.radius)
    }

} 