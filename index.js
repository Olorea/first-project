"use strict";

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext ('2d')


ctx.beginPath();
ctx.strokeStyle = "red";
for(let x=0;x<=500;x+=1){
    ctx.lineTo(
        x,
        250+Math.sin(x/10)*30,
    );
}
ctx.stroke();

