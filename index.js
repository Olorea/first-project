

const canvas = document.querySelector('canvas');

console.log(canvas);

const ctx = canvas.getContext('2d');

console.log(ctx);

ctx.fillStyle = '#ff0000';
ctx.lineWidth=2;
ctx.strokeStyle='#00ff00';

/*
ctx.fillRect(10,10,300,30);
ctx.strokeRect(10,10,300,30);
*/

ctx.beginPath();

ctx.moveTo(250,250);
for(let i=-100;i<100;i+=0.01){
    ctx.lineTo(
        Math.sin(i)*i*10+250,
        Math.cos(i)*i*10+250
    );
}
ctx.stroke();


ctx.font = "30px Arial";
ctx.strokeText('ahoj',30,30,40);

