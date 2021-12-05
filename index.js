"use strict";


//alert(`Hello world`)

//======================================================Definition

class Star{
    constructor(x,y,rotation,size,color){
        this.x=x;
        this.y=y;
        this.rotation=rotation||0;
        this.size=size||30;
        this.color=color||"white";
        this.edges=2.5;
    }

    render(ctx){
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        const radians = (this.rotation)/180*Math.PI;
        for(let i= -Math.PI;i<=Math.PI*4;i+=Math.PI*2/this.edges){
            ctx.lineTo(
                Math.cos(i+radians)*this.size+this.x,
                Math.sin(i+radians)*this.size+this.y,
            );
        }
        ctx.stroke();
    }
}

/*
//======================================================Data

let balls = [];
for(let i=0;i<200;i=i+1){
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
        ball.x=ball.x+(Math.random()-0.5)*30*duration;
        ball.y=ball.y+(Math.random()-0.1)*100*duration;
        if(ball.y>500)ball.y=0;
        ball.rotation=ball.rotation+100*duration;
    }

    requestAnimationFrame(drawBall);

};
drawBall();
*/
/*
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext ('2d')

const star1 = new Star(100,100,0,10,'red');



// Render loop
setInterval(()=>{
    ctx.clearRect(0,0,500,500);
    star1.render(ctx);
},10);



// Update loop
setInterval(()=>{
    star1.x = star1.x+1;
},100);


canvas.addEventListener('pointermove',(event)=>{
    star1.x = event.clientY;
    star1.y = event.clientX;
})
*/


const canvas = document.querySelector('canvas')
const ctx = canvas.getContext ('2d')


 

/*ctx.moveTo(10, 0);
ctx.lineTo(10, 375);

ctx.strokeStyle = "#000";
ctx.stroke();*/

//canvas width="320" height="200" id="platno"></canvas>

//let platno = document.getElementById("platno");
//let kontext = platno.getContext("2d");


