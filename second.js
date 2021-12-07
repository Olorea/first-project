// alert('hello')


const canvas = document.querySelector('canvas')
const ctx = canvas.getContext ('2d')

 function drawRectangle(){

    ctx.moveTo(10, 0);
    ctx.lineTo(10, 375);
    ctx.lineTo(150, 375);


    ctx.strokeStyle = "#000";
    ctx.stroke();

}

drawRectangle();

function drawArc(){

    ctx.fillRect(50, 50, 100, 100);
    ctx.strokeRect(200, 50, 100, 100);

    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, Math.PI * 2);
    ctx.fill();

}

drawArc();

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

function drawRandomWalk(){

    let x = Math.random()*500;
    let y = Math.random()*500;

    ctx.moveTo(x,y);

    for(let i=0;i<100;i=i+1){
    
        x+=(Math.random()-0.5)*10;
        y+=(Math.random()-0.5)*10;

        ctx.lineTo(x,y);
    
    }
    ctx.stroke();
    //ctx.fill();
}

for(let i=0;i<10;i=i+1){
    drawRandomWalk();
}
