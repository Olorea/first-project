"use strict";

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext ('2d')



let lastTime=performance.now();

let balls = [];


for(let i=0;i<100;i=i+1){
    balls.push({
        x: Math.random()*500,
        y: Math.random()*500,
        edges: 2.5,
        rotation: Math.random()*360,
        size: 5+Math.random()*10,
        color:'#'+Math.floor(Math.random()*16777215).toString(16),
    });
}



const drawBall = ()=>{

    const duration = (performance.now() - lastTime)/1000;
    lastTime = performance.now();
  
    ctx.clearRect(0,0,500,500);

    for(let ball of balls){
        ctx.beginPath();
        ctx.strokeStyle = ball.color||"white";
        const radians = (ball.rotation||0)/180*Math.PI;
        for(let i= -Math.PI;i<=Math.PI*4;i+=Math.PI*2/(ball.edges||16)){
            ctx.lineTo(
                Math.cos(i+radians)*(ball.width||ball.size||30)+ball.x,
                Math.sin(i+radians)*(ball.height||ball.size||30)+ball.y,
            );
        }
        ctx.stroke();
    
        ball.x=ball.x+(Math.random()-0.5)*100*duration;
        ball.y=ball.y+(Math.random()-0.5)*100*duration;
    }

    requestAnimationFrame(drawBall);

};
drawBall();



