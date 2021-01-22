"use strict";

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext ('2d')

/*/
ctx.beginPath();
var GRAPH_TOP = 25;  
var GRAPH_BOTTOM = 375;  
var GRAPH_LEFT = 25;  
var GRAPH_RIGHT = 475;   
   
var GRAPH_HEIGHT = 350;   
var GRAPH_WIDTH = 450; 

ctx.beginPath();  
ctx.moveTo( GRAPH_LEFT, GRAPH_BOTTOM );  
ctx.lineTo( GRAPH_RIGHT, GRAPH_BOTTOM );  
ctx.lineTo( GRAPH_RIGHT, GRAPH_TOP );  
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle = "#BBB";  
ctx.moveTo( GRAPH_LEFT, GRAPH_TOP );  
ctx.lineTo( GRAPH_RIGHT, GRAPH_TOP );  
ctx.stroke(); 

ctx.beginPath();  
ctx.moveTo( GRAPH_LEFT, ( GRAPH_HEIGHT ) / 4 * 3 + GRAPH_TOP );  
ctx.lineTo( GRAPH_RIGHT, ( GRAPH_HEIGHT ) / 4 * 3 + GRAPH_TOP );  
ctx.stroke(); 

ctx.beginPath();  
ctx.moveTo( GRAPH_LEFT, ( GRAPH_HEIGHT ) / 2 + GRAPH_TOP );  
ctx.lineTo( GRAPH_RIGHT, ( GRAPH_HEIGHT ) / 2 + GRAPH_TOP );  
ctx.stroke();  

ctx.beginPath();  
ctx.moveTo( GRAPH_LEFT, ( GRAPH_HEIGHT ) / 4 + GRAPH_TOP );  
ctx.lineTo( GRAPH_RIGHT, ( GRAPH_HEIGHT ) / 4 + GRAPH_TOP );  
ctx.stroke();
/**/

//====================[ Grid ]===
for(var axis of ['x','y']){
    for(let i=0;i<=500;i+=Math.PI*2*5){
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "#ccc";  // Green path/ osa y
        if(axis==='x'){
            ctx.moveTo(i, 500);
            ctx.lineTo(i, 0);
        }else
        if(axis==='y'){
            ctx.moveTo(500,i);
            ctx.lineTo(0,i);
        }
        ctx.stroke();  // Draw it
    }
}
//====================[ points on Axis (TODO: maybe better name) ]===
for(var axis of ['x','y']){
    for(let i=0;i<=10;i+=Math.PI*2*5){
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "black";  // Green path/ osa y
        if(axis==='x'){
            ctx.moveTo(i, 500);
            ctx.lineTo(i, 0);
        }else
        if(axis==='y'){
            ctx.moveTo(500,i);
            ctx.lineTo(0,i);
        }
        ctx.stroke();  // Draw it
    }
}

//====================[ Axis Y ]===
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

//====================[ Graph ]===
ctx.beginPath();
ctx.strokeStyle = "red";

for(let x=0;x<=500;x+=1){
    ctx.lineTo(
        x,
        250-Math.cos(x/10)*30,
    );
}
ctx.stroke();
 
   
   
