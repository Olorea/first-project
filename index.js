"use strict";

//======================================================Definition

class Star{
    constructor(x,y,rotation,size,color){
        this.x=x;
        this.y=y;
        this.rotation=rotation;
        this.size=size;
        this.color=color;
        this.edges=2.5;
    }

    render(){
        ctx.beginPath();
        ctx.strokeStyle = this.color||"white";
        const radians = (this.rotation||0)/180*Math.PI;
        for(let i= -Math.PI;i<=Math.PI*4;i+=Math.PI*2/(this.edges||16)){
            ctx.lineTo(
                Math.cos(i+radians)*(this.width||this.size||30)+this.x,
                Math.sin(i+radians)*(this.height||this.size||30)+this.y,
            );
        }
        ctx.stroke();
    }
}


//======================================================Data

let balls = [];
for(let i=0;i<100;i=i+1){
    const star = new Star(
        Math.random()*500,
        Math.random()*500,
        Math.random()*360,
        5+Math.random()*10,
        '#'+Math.floor(Math.random()*16777215).toString(16),
    );
    balls.push(star);
}

//======================================================Execution

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext ('2d')

let lastTime=performance.now();

const drawBall = ()=>{

    const duration = (performance.now() - lastTime)/1000;
    lastTime = performance.now();
  
    ctx.clearRect(0,0,500,500);

    for(let ball of balls){
        
        ball.render();
        ball.x=ball.x+(Math.random()-0.5)*100*duration;
        ball.y=ball.y+(Math.random()-0.5)*100*duration;
    }

    requestAnimationFrame(drawBall);

};
drawBall();



