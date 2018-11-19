class BallMaker {
	constructor(){
		this.balls=[]
		this.speedX=0
		this.speedY=5
		}
	drawBall(x,y,color){
		// console.log(`---im drawing a circle with ${x} ,${y} colored ${color}`)
		drawCircle(x,y,5,color)
	}
	drawAll(){
		for(var i in this.balls){
			let ball=this.balls[i]
			this.drawBall(ball.x,ball.y,ball.color)
		}

	}
	makeBalls(count,color){
		const y=(-1)*(Math.floor(Math.random()*30))
		while(count>0){
			let x=Math.floor(Math.random()*canvas.width)
			this.balls.push({x,y,color})
			count--
		}
	}
	moveBalls(){
		for (var i in this.balls){
			let ball=this.balls[i]
			ball.y=ball.y+this.speedY
		}

	}
}