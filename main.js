var mouseEvent;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

	canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) 
{
	
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("line_width").value;
    radius = document.getElementById("radius").value;
    MouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) 
{

    current_position_of_mouseX = e.clientX = canvas.offsetLeft;
    current_position_of_mouseY = e.clientY = canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        console.log("Current position of X and Y position = ");
        console.log("X = " + current_position_of_mouseX + " Y = " + current_position_of_mouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouseX ,current_position_of_mouseY ,radius ,0 , 2 * Math.PI);
        ctx.stroke();
    }

}

