"use strict";

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext ('2d')


ctx.beginPath();
             
ctx.lineWidth = "2";
ctx.strokeStyle = "green";  // Green path/ osa y
ctx.moveTo(0, 500);
ctx.lineTo(0, 50);
ctx.stroke();  // Draw it

ctx.beginPath();
ctx.lineWidth = "2";
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

