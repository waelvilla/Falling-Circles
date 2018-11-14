let pi=Math.PI, fps=30


const canvas=document.getElementById('game')
const canvasContext=canvas.getContext("2d")

window.onload=()=>{
	let ballMaker=new BallMaker()
	ballMaker.makeBalls(10,'white')
	let stickMaker=new StickMaker()
	stickMaker.makeSticks(5,'white')
	setInterval(()=>{
		//main functions
		drawShapes()
		ballMaker.drawAll()
		ballMaker.moveBalls()
		stickMaker.drawAll()
		stickMaker.moveSticks()
	}, 1000/fps)
}

//main methods
let drawCanvas=(color)=>{
	drawRect(0,0,canvas.width,canvas.height,color)
}

let drawShapes=()=>{
	//main canvas
	drawCanvas('firebrick')

	// drawRect(250,50,5,20,'white')
	// drawRect(400,50,5,20,'white')


	// drawRect(450,150,5,20,'white')
	// drawRect(400,50,5,20,'white')

	//pad
	drawRect(canvas.width/2-200,canvas.height-20,200,20,'white')

}


// let update=()=>{
// 	drawCanvas('black')
// }




//helper methods
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

let drawText=(text,x,y,color)=>{
	canvasContext.fillStyle=color
	canvasContext.font="40px fantasy"
	canvasContext.fillText(text,x,y)
}

let moveBall=()=>{

}
let r=new Rect()
///////////////////////shapes /////////////////////
// topx,topy,width,height,color

