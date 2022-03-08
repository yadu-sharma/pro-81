canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle= "gray";
ctx.lineWidth= 4;
ctx.rect(180,170,400,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth= 4;
ctx.arc(250,220,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 4;
ctx.arc(350,220,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 4;
ctx.arc(450,220,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth= 4;
ctx.arc(300,260,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth= 4;
ctx.arc(400,260,40,0,2*Math.PI);
ctx.stroke();