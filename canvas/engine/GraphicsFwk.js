/* Graphics.js */

function Graphics(_canvasName)
{
    this.canvas = _canvas;
    this.context = canvas.getContext("2d");
    this.MOUSE_POSITION = { X: 1, Y: 1 };
    this.SCREEN_WIDTH = window.innerWidth;
    this.SCREEN_HEIGHT = window.innerHeight;
    
    setInterval(function(){
        var eventPerSecond = new Event("SecondElapsed",{bubbles:true,cancelable:true});
        eventPerSecond.CurrentTime = new Date();
        window.dispatchEvent(eventPerSecond);
    }, 1000); //second Elapsed
}

Graphics.prototype.Init = function(interval){

    this.canvas.width = this.SCREEN_WIDTH;
    this.canvas.height = this.SCREEN_HEIGHT;

    setInterval(function() {
        var eventElapsed = new Event("IntervelElapsed",{bubbles:true,cancelable:true});
        eventElapsed.Random = Math.random();
        window.dispatchEvent(eventElapsed);        
    }, interval);
}

Graphics.prototype.TrackMouseMovement = function(){
    window.addEventListener("mousemove",function(e){
        this.MOUSE_POSITION = {
            X: e.x,
            Y: e.y
        };
    });
}

Graphics.prototype.Print = function(msg){
    context.fillStyle = '#FFF';
    context.font = '20px Arial';
    context.fillText (msg, 40, 100);
}

Graphics.prototype.ClearScreen = function(screenFade)
{
    this.context.fillStyle = "rgba(0,0,0,"+screenFade+")"; //

}

//Random
Graphics.prototype.RandomNext = function(int){
    var _rnd = Math.random();
    var _flot = _rnd * int;
    var _int = Math.floor(_flot);

    var result = {R:_rnd, F:_flot,I:_int};
    return result;
}

//Particle
Graphics.prototype.Particle = function(x,y,radius,color)
{
    this.X = x;
    this.Y = y;
    this.Radius = radius;
    this.Color = color;
    this.Radians = 0;
    this.Velocity = 0.5;

    this.Update = function()
    {
        this.Radians += this.Velocity;
        this.X = X + Math.cos(this.Radians);
        this.Y = Y + Math.sin(this.Radians);
        this.Draw();
    };

    this.Draw = function()
    {
        this.context.beginPath();
        
        //this.context.arc();
        this.context.arc(this.X,this.Y,this.Radius,0,Math.PI *2,false);
        this.context.fillStyle = this.Color;
        this.context.fill();
        this.context.closePath();
    };
}

Graphics.prototype.ShowMessage = function()
{
    var boxWidth = 400;
    var boxHeight = 200;
    var xpos = canvas.width/2 - boxWidth/2;
    var ypos = canvas.height/2 - boxHeight/2

    //ctx.fillStyle = 'rgba(200,0,0,1.75)';
    //ctx.fillRect(xpos , ypos , 400, 200);
    ctx.fillStyle = '#F0F';
    ctx.font = '20px Sans-Serif';
    ctx.textBaseline = 'Top';
    var t = ctx.measureText(msg).width;
    var bg = "█"; 
    for(var i=0;i<t;i++)
    {
        bg += "█";
    }
    ctx.fillText(bg,xpos + 10,ypos + 40);
    ctx.fillStyle = '#000';
    ctx.fillText (msg, xpos +10, ypos +40);
    
}
