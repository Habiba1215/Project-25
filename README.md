push()
			translate(posLeft.x, posLeft.y);
			imageMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			image(this.image, 0, 0, this.wallThickness, this.dustbinHeight);
			pop()
			
			push()
			translate(posRight.x, posRight.y);
			imageMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1 * this.angle)
			image(this.image, 0, 0, this.wallThickness, this.dustbinHeight);
			pop()


            World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);





        this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);










        var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;