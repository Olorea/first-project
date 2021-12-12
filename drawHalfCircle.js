function drawHalfCircle(ctx,x=100,y=100){
    ctx.beginPath();
    ctx.arc(x, y, 50, 0,  Math.PI);
    ctx.fill();
}


 drawHalfCircle(ctx2, 250,150);
 drawHalfCircle(ctx2, 250,350);
 drawHalfCircle(ctx2);

