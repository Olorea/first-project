
function drawTriangle(ctx, x,y) {

    x-= 80;
    y-= 50;


    ctx.beginPath();
    ctx.moveTo(x+75,  y+50);
    ctx.lineTo(x+100, y+75);
    ctx.lineTo(x+100, y+25);
    ctx.fill();

}
     