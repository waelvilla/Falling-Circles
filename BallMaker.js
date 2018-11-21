class BallMaker {
	constructor(){
		this.balls=[]
		this.caught=0
		this.missed=0
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
		let y=(-1)*(Math.floor(Math.random()*20))
		while(count>0){
			let x=Math.floor(Math.random()*canvas.width)
			let y=(-1)*(Math.floor(Math.random()*20))
			// this.drawBall(x,y,color)
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
	score(s1=this.caught, s2=this.missed){
		//draw caught
		let score1="caught: "+s1
		drawText(score1,canvas.width-250,40,'white')
		
		//draw missed
		let score2="missed: "+s2
		drawText(score2,canvas.width-150,40,'white')


	}

	resetBalls(){
			this.balls=[]
		}
	

	collisionCheck(pad){
		
		for (var i in this.balls){
			let ball=this.balls[i]
			//reached the deadline
			if(ball.y<=(pad.y) && ball.y>=(padY-10)){

				//check if ball is within pad width
				if(ball.x>=pad.x && ball.x<=(pad.x+pad.w)){
					console.log("cought "+i);
					ball.y=-100
					this.caught++
				}
				else{
					console.log("missed "+i);
					ball.y=-100
					this.missed++
					if(this.missed==5){
						
						alert(`you lost! \nCought: ${this.caught} \nMissed: ${this.missed}`)
						this.missed=0
						this.caught=0
						this.resetBalls()
						reset()
						
					}
				}

			}
			else if(ball.y>(padY-10)){
				console.log("lost at "+ball.y)
				ball.y=-100

			}
			
		}
	}
}