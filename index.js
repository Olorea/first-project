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

for(let i= -100;i<100;i+=0.01){
    ctx.lineTo(
        Math.sin(i)*10+250,
        Math.cos(i)*10+250,
    );
}

ctx.stroke();
*/


//===================================











//===================================





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
let ball0x=0,ball0y=0;
let ball1x=50,ball1y=50;

const drawBall = ()=>{

    const duration = (performance.now() - lastTime)/1000;
    lastTime = performance.now();
  
    ctx.clearRect(0,0,500,500);
    ctx.beginPath();
    for(let i= -100;i<100;i+=0.01){
        ctx.lineTo(
            Math.cos(i)*20+ball0x,
            Math.sin(i)*20+ball0y,
        );
    }
    ctx.stroke();

    ball0x=ball0x+30*duration;
    ball1y=ball1y+7*duration;


    ctx.beginPath();
    for(let i= -100;i<100;i+=0.01){
        ctx.lineTo(
            Math.sin(i)*20+ball1x,
            Math.cos(i)*20+ball1y,
        );
    }
    ctx.stroke();

    ball1x=ball1x+30*duration;



    //if(ballX<100){
        //drawBall();
        //setTimeout(drawBall,Math.random()*100);
        requestAnimationFrame(drawBall);
    //}
};
drawBall();

