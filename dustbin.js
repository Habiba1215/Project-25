class dustbin
{
	constructor(x,y) 
	{
		this.image = loadImage("dustbin.png");
		this.x=x;
		this.y=y;
		this.dustbinWidth=240;
		this.dustbinHeight=275;
		this.wallThickness=260;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		
		World.add(world, this.bottomBody)
		

		

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			
			push()
			translate(posBottom.x, posBottom.y);
			imageMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			image(this.image, 0, 0, this.dustbinWidth, this.wallThickness);
			pop()

	}

}