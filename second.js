// alert('hello')


const canvas = document.querySelector('canvas')
const ctx = canvas.getContext ('2d')


 
ctx.moveTo(10, 0);
ctx.lineTo(10, 375);
ctx.lineTo(150, 375);

ctx.strokeStyle = "#000";
ctx.stroke();
