class Rect {
	constructor(x=0,y=0,w=5,h=5,color='white'){
		this.x=x
		this.y=y
		this.w=w
		this.h=h
		this.color=color
	}
	draw(topx=this.x,topy=this.y,width=this.w,height=this.h,color=this.color){
		canvasContext.fillStyle=color
		canvasContext.fillRect(topx,topy,width,height)
		
	}

}


