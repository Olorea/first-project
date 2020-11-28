let i = 0;
setInterval(()=>{
    document.body.innerHTML = (i++%2?`X`:'O');
},600);