"use strict";

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext ('2d')

/*
console.log(ctx)

ctx.font = "18px Arial";

ctx.textBaseline = "top";
ctx.fillText("Top", 5, 100)
ctx.textBaseline = "bottom";
ctx.fillText("Bottom", 50, 100);
ctx.textBaseline = "middle";
ctx.fillText("Middle", 120, 100);
ctx.textBaseline = "alphabetic";
ctx.fillText("Alphabetic", 190, 100);
ctx.textBaseline = "hanging";
ctx.fillText("Hanging", 290, 100); 

ctx.beginPath();
ctx.lineWidth = "2"
ctx.moveTo(0,75);
ctx.lineTo(250, 75);
ctx.stroke(); // Draw it

ctx.beginPath();
ctx.strokeStyle = "purple"; // Purple path
ctx.moveTo(0, 80);
ctx.lineTo(0, 900);
ctx.stroke(); // Draw it 

/*
ctx.beginPath();

ctx.moveTo(250,250);

for(let i= -Math.PI;i<=Math.PI;i+=0.03){
    ctx.lineTo(
        Math.sin(i)*10+250,
        Math.cos(i)*10+250,
    );
}

ctx.stroke();
*/


//===================================











//===================================




/*
let lastX,lastY,isDrawingHohohohoho;

canvas.addEventListener('pointerdown',(event)=>{
    isDrawingHohohohoho = true;
});

canvas.addEventListener('pointerup',(event)=>{
    isDrawingHohohohoho = false;
});



canvas.addEventListener('pointermove',(event)=>{
    if(isDrawingHohohohoho){
    ctx.beginPath();
    ctx.strokeStyle = "blue"
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(event.clientX,event.clientY);
    lastX=event.clientX;
    lastY=event.clientY;
    ctx.stroke();
    }
})
/**/


//===================================

/*
alert(1);
setTimeout(()=>{
    alert(2);


    setTimeout(()=>{
        alert(3);
    },3000);


},3000);
alert(4);
*/

//===================================
// camelCase
// BigCamelCase
// underscore_case
// UPPER_CASE


let lastTime=performance.now();
let ball0 = {x:0, y:0};
let ball1x=50,ball1y=50;
let ball2x=100,ball2y=100;
let ball3x=150,ball3y=150;
let ball4x=200,ball4y=200;
let ball5x=300,ball5y=300;

let balls = [{x:250, y:250,color:'red'},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250, color: 'blue'}];



canvas.addEventListener('pointerup',(event)=>{
    ball0.x=event.clientX;
    ball0.y=event.clientY;
});


const drawBall = ()=>{

    const duration = (performance.now() - lastTime)/1000;
    lastTime = performance.now();
  
    ctx.clearRect(0,0,500,500);

    
    ctx.beginPath();
    ctx.strokeStyle = "blue"
    for(let i= -Math.PI;i<=Math.PI;i+=0.03){
        ctx.lineTo(
            Math.cos(i)*30+ball0.x,
            Math.sin(i)*30+ball0.y,
        );
    }
    ctx.stroke();

    ball0.x=ball0.x-10*duration;
    ball0.y=ball0.y-7*duration;


    ctx.beginPath();
    ctx.strokeStyle = "red"
    for(let i= -Math.PI;i<=Math.PI;i+=0.03){
        ctx.lineTo(
            Math.sin(i)*30+ball1x,
            Math.cos(i)*30+ball1y,
        );
    }
    ctx.stroke();

    ball1x=ball1x+15*duration;
    ball1y=ball1y-17*duration;

    ctx.beginPath();
    ctx.strokeStyle = "green"
    for(let i= -Math.PI;i<=Math.PI;i+=0.03){
        ctx.lineTo(
            Math.cos(i)*30+ball2x,
            Math.sin(i)*30+ball2y,
        );
    }
    ctx.stroke();

    ball2x=ball2x-30*duration;
    ball2y=ball2y+7*duration;

    ctx.beginPath();
    ctx.strokeStyle = "orange"
    for(let i= -Math.PI;i<=Math.PI;i+=0.03){
        ctx.lineTo(
            Math.cos(i)*30+ball3x,
            Math.sin(i)*30+ball3y,
        );
    }
    ctx.stroke();

    ball3x=ball3x+30*duration;
    ball3y=ball3y+0*duration;

    ctx.beginPath();
    ctx.strokeStyle = "purple"
    for(let i= -Math.PI;i<=Math.PI;i+=Math.PI*2/5){
        ctx.lineTo(
            Math.cos(i)*30+ball4x,
            Math.sin(i)*30+ball4y,
        );
    }
    ctx.stroke();

    ball4x=ball4x+18*duration;
    ball4y=ball4y+36*duration;


    for(let ball of balls){
        ctx.beginPath();
        ctx.strokeStyle = ball.color||"white"
        for(let i= -Math.PI;i<=Math.PI;i+=Math.PI*2/8){
            ctx.lineTo(
                Math.cos(i)*30+ball.x,
                Math.sin(i)*30+ball.y,
            );
        }
        ctx.stroke();
    
        ball.x=ball.x+(Math.random()-0.5)*100*duration;
        ball.y=ball.y+(Math.random()-0.5)*100*duration;
    }

    //if(ballX<100){
        //drawBall();
        //setTimeout(drawBall,Math.random()*100);
        requestAnimationFrame(drawBall);
    //}
};
drawBall();



