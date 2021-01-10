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

let balls = [];//[{x:40, y:100, height: 60, width: 60, color:'red'},{x:250, y:250, size: 66},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:250, y:250},{x:220, y:220, color: 'yellow' },{x:250, y:250},{x:250, y:250, color: 'blue'}];

for(let i=0;i<100;i=i+1){
    balls.push({
        x: Math.random()*500,
        y: Math.random()*500,
        edges: 2.5,//2+Math.ceil(Math.random()*18),
        rotation: Math.random()*360,
        size: 5+Math.random()*10,
        color:'#'+Math.floor(Math.random()*16777215).toString(16)
    });
}


canvas.addEventListener('pointerup',(event)=>{
    ball0.x=event.clientX;
    ball0.y=event.clientY;
});


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



