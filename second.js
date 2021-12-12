// alert('hello')

const canvas1 = document.getElementById('platno1')
const ctx1 = canvas1.getContext ('2d')

const canvas2 = document.getElementById('platno2')
const ctx2 = canvas2.getContext ('2d')

 function drawRectangle(ctx,x=250,y=250,color="#906090"){

    ctx.fillStyle  = color;
    ctx.fillRect(x,y, 100, 100);
    //ctx.strokeRect(200, 50, 100, 100);

}

drawRectangle(ctx1,10,10,"red");
drawRectangle(ctx1,70,90,"green");
drawRectangle(ctx1,300,309,"blue");

//drawRectangle(ctx2);

function drawArc(ctx){
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, Math.PI * 2);
    ctx.fill();
}


//drawArc(ctx2);

/*
for(let i=0;i<200;i=i+1){
    ctx.beginPath();
    ctx.arc(Math.random()*500, Math.random()*500, 5, 0, Math.PI * 2);
    ctx.fill();
}

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(20, 150);
ctx.closePath();
ctx.stroke();

*/
//--------



drawRandomWalk(ctx1,50,50);

for(let i=0;i<100;i=i+1){
    //drawRandomWalk(ctx2,Math.random()*500,Math.random()*500);
}

drawTriangle(ctx2,0,0);
drawTriangle(ctx2,250,250);




