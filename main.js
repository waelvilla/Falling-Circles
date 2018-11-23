
const canvas=document.getElementById('game')
const canvasContext=canvas.getContext("2d")
let pi=Math.PI, fps=30, padX=canvas.width/2, padY=canvas.height-20, gameRunning=true

window.onload=()=>{
	let ballMaker=new BallMaker()
	ballMaker.makeBalls(1,'white')
	let stickMaker=new StickMaker()
	// stickMaker.makeSticks(1,'white')
	let pad=new Pad(padX,padY,'white')

	 canvas.addEventListener('mousemove',(evt)=>{
 		let mousePos=calculateMousePoisition(evt)
	 	padX=mousePos.x-100
	 })

	 setInterval(()=>{
		ballMaker.makeBalls(1,'white')
	// 	stickMaker.makeSticks(1,'white')
	 },2000)

	setInterval(()=>{
		//main functions
			if(gameRunning){
				drawShapes()
				ballMaker.drawAll()
				ballMaker.moveBalls()
				ballMaker.collisionCheck(pad)
				ballMaker.score()
		
				stickMaker.drawAll()
				stickMaker.moveSticks()
				stickMaker.collisionCheck()
	
				pad.draw(padX)

			}
			else{
				document.addEventListener('keydown',(evt)=>{					
					if(evt.keyCode==13){
						gameRunning=true
						
					}
						
				})

			}
		

		

	}, 1000/fps)


}


//main methods
let drawCanvas=(color)=>{
	drawRect(0,0,canvas.width,canvas.height,color)
}

let drawShapes=()=>{
	//main canvas
	drawCanvas('firebrick')

	//pad 

}

let calculateMousePoisition=(evt)=>{
	let rect=canvas.getBoundingClientRect();
	let root=document.documentElement;
	let mouseX=evt.clientX - rect.left - root.scrollLeft
	let mouseY= evt.clientY - rect.top - root.scrollTop
	return{
		x: mouseX,
		y: mouseY
	}
}







///////////helper methods///////////////

let drawRect=(topx,topy,width,height,color)=>{
	canvasContext.fillStyle=color
	canvasContext.fillRect(topx,topy,width,height)
}


let drawCircle=(centerX,centerY, radius, color)=>{
	canvasContext.fillStyle=color
	canvasContext.beginPath()
	//x,y,radius,startAngle,endAngle, anticlockwise?
	canvasContext.arc(centerX,centerY,radius,0,pi*2,true)
	canvasContext.fill()
}

let drawText=(text,x,y,color,font="20px fantasy")=>{
	canvasContext.fillStyle=color
	canvasContext.font=font
	canvasContext.fillText(text,x,y)
}

let reset=()=>{
	gameRunning=false
	drawText("Press Enter to restart", (canvas.width/2)-200,canvas.height/2, 'white', "50px fantasy")

}
