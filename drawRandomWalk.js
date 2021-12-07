function drawRandomWalk(ctx,x,y){

    ctx.moveTo(x,y);

    for(let i=0;i<100;i=i+1){
    
        x+=(Math.random()-0.5)*10;
        y+=(Math.random()-0.5)*10;

        ctx.lineTo(x,y);
    
    }
    ctx.stroke();
    //ctx.fill();
}