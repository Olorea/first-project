"use strict";

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext ('2d')


ctx.beginPath();
             
ctx.lineWidth = "2";
ctx.font = "30px Arial";
ctx.fillText("y", 260, 70); 
ctx.strokeStyle = "green";  // Green path/ osa y
ctx.moveTo(250, 500);
ctx.lineTo(250, 50);
ctx.stroke();  // Draw it

//====================[ Axis X ]===
ctx.beginPath();
ctx.lineWidth = "2";
ctx.fillText("x", 480, 310);
ctx.strokeStyle = "purple";  // Purple path/osa x
ctx.moveTo(0, 250);
ctx.lineTo(500, 250);  
ctx.stroke();   

ctx.beginPath();
ctx.strokeStyle = "red";

for(let x=0;x<=500;x+=1){
    ctx.lineTo(
        x,
        250+Math.sin(x/10)*30,
    );
}
ctx.stroke();


