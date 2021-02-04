class bob
{
	constructor(x,y)
	{
		var options={
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:0.8,			
			}
			this.radius = 90;
		this.x = x;
		this.y = y;
	    this.body=Bodies.circle(x, y, 90, options);
        

	
 		World.add(world, this.body);

	}
	display()
	{
			
			var Pos=this.body.position;		

			push()
			translate(Pos.x, Pos.y);
			ellipseMode(CENTER);
			fill("pink");
			ellipse(0, 0, 90, 90);
			pop()
			
	}

}