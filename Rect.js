class Rect {
	constructor(x=0,y=0,w=0,h=0,color='white'){
		this.x=x
		this.y=y
		this.w=w
		this.h=h
		this.color=color
	}
}

class Pad extends Rect{
	constructor(x=0,y=0,w=0,h=0,color='white'){
		super(x=0,y=0,w=0,h=0,color='white')
		console.log("pad")
	}
}

class StickMaker extends Rect{
	constructor(){
		super()
		this.sticks=[]
		this.w=5
		this.h=20
		this.speedX=0
		this.speedY=5
	}
	drawStick(topx,topy,color){
		drawRect(topx,topy,this.w,this.h,color)
	}
	drawAll(){
		for(var i in this.sticks){
			let stick=this.sticks[i]
			this.drawStick(stick.x,stick.y,stick.color)
		}
	}
	makeSticks(count,color){
		const y=10
		while(count>0){
			let x=Math.floor(Math.random()*canvas.width)
			// this.drawBall(x,y,color)
			this.sticks.push({x,y,color})
			count--
		}
	}
	moveSticks(){
		for (var i in this.sticks){
			let stick=this.sticks[i]
			stick.y=stick.y+this.speedY
		}
	}
}


