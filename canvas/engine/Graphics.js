/* Graphics.js */

function Fwrk()
{

this.canvas;
this.ctx;
var MouseX = 0;
var MouseY = 0;

this.CreateCanvas = function(Width,Height)
{
    this.canvas = document.querySelector("canvas");
    this.canvas.width = Width;
    this.canvas.height = Height;
    this.ctx = canvas.getContext("2d");
};

this.Background = function(color)
{
    this.ctx.fillStyle = color;//grd;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
};

this.SetFPS = function(fps)
{
    /*
    setInterval(function() {
        var eventElapsed = new Event("drawEvent",{bubbles:true,cancelable:true});
        eventElapsed.Random = Math.random();
        window.dispatchEvent(eventElapsed);        
    }, 1000/fps);

    window.addEventListener('drawEvent',function(e) { Draw(); });
    */
   Draw();
};

//Global
this.Global = { ctx:this.ctx };
this.Global.Alpha = function(alphaValue)
{
    ctx.globalAlpha = alphaValue;
};
this.Global.Composition = { ctx:this.ctx };

this.Global.Composition.SourceOver = function(){ ctx.globalCompositeOperation  = "source-over"; };
this.Global.Composition.SourceAtop = function(){ ctx.globalCompositeOperation  = "source-atop"; };
this.Global.Composition.SourceIn = function(){ ctx.globalCompositeOperation  = "source-in"; };
this.Global.Composition.SourceOut = function(){ ctx.globalCompositeOperation  = "source-out"; };

this.Global.Composition.DestinationOver = function(){ ctx.globalCompositeOperation  = "destination-over"; };
this.Global.Composition.DestinationAtop = function(){ ctx.globalCompositeOperation  = "destination-atop"; };
this.Global.Composition.DestinationIn = function(){ ctx.globalCompositeOperation  = "destination-in"; };
this.Global.Composition.DestinationOut = function(){ ctx.globalCompositeOperation  = "destination-out"; };

this.Global.Composition.Lighter = function(){ ctx.globalCompositeOperation  = "lighter"; };
this.Global.Composition.Copy = function(){ ctx.globalCompositeOperation  = "copy"; };
this.Global.Composition.Xor = function(){ ctx.globalCompositeOperation  = "xor"; };



//Event
this.Events = { ctx : this.ctx };
    this.Events.CaptureMouseEvents = function()
    {
        window.addEventListener("mousemove",function(event)
        {
            //event.preventDefault();
            MouseX = event.x;
            MouseY = event.y;
            OnMouseMove(event);
        });

        window.addEventListener('mousedown',function(e) { OnMouseDown(e); });
        window.addEventListener("click",function(e) { OnClick(e); });
        window.addEventListener("dblclick",function(e) { OnDblClick(e); });
        window.addEventListener("drag",function(e) { OnDrag(e); });
        window.addEventListener("drop",function(e) { OnDrop(e); });
        window.addEventListener("dragstart",function(e) { OnDragStart(e); });
        window.addEventListener("dragover",function(e) { OnDragOver(e); });
    };

    this.CaptureKeyboardEvents = function()
    {
        window.addEventListener("input",function(e){ OnInput(e); });
        window.addEventListener("keydown",function(e){ OnKeydown(e); });

        // e.key = keystroke
        // e.code = "Space"
        window.addEventListener("keypress",function(e){ OnKeyPress(e); });
        
        window.addEventListener("keyup",function(e){ OnKeyUp(); });
    }
 
//Color
this.Color = { ctx : this.ctx  };
this.Color.RGBA = function(r,g,b,a)
{
    var col = "rgba(";
    if(r == -1)
        col+= Math.floor(Math.random() * 255) + ",";
    else
        col+= r + ",";
    
    if(b == -1)
        col+= Math.floor(Math.random() * 255) + ",";
    else
        col+= b + ",";
    
    if(g == -1)
        col+= Math.floor(Math.random() * 255) + ",";
    else
        col+= g + ",";
    
    if(a == -1)
        col+= (Math.random()) + ")";
    else
        col+= a + ")";

    return col;
};

this.Color.FillStyle = function(colorValue)
{
    ctx.fillStyle = colorValue;
};


this.Color.ShadowBlur = function(blurValue)
{
    ctx.shadowBlur = blurValue;
};

this.Color.ShadowColor = function(blurColor)
{
    ctx.shadowColor = blurColor;
};

this.Color.Stroke = function()
{
    ctx.stroke();
};

this.Color.StrokeStyle = function(sStyle)
{
    ctx.strokeStyle = sStyle;
};



this.Color.Gradient = { ctx:this.ctx };
this.Color.Gradient.Linear = function(x0,y0,x1,y1, ColorStop)
{
    var grd_linear = ctx.createLinearGradient(x0, y0, x1, y1);
    return grd_linear;
};


this.PrintLine = function(msg,XAxis, YAxis){
    //ctx.fillStyle = '#000';
    ctx.font = '20px Arial';
    ctx.fillText (msg, XAxis, YAxis);
};

this.ShowGrid = function(n)
{
    for(var x=0;x<canvas.width;x+=10)
    {
        for(var y=0;y<canvas.height;y+=10)
        {
            
        }
    }
}


//objects
this.TextBaseLine = { ctx: this.ctx };
this.TextBaseLine.Top =  function()
{
    ctx.textBaseline = "top";
};

this.TextBaseLine.Bottom =  function()
{
    ctx.textBaseline = "bottom";
};

this.TextBaseLine.Middle =  function()
{
    ctx.textBaseline = "middle";
};

this.TextBaseLine.Alphabetic =  function()
{
    ctx.textBaseline = "alphabetic";
};

this.TextBaseLine.Hanging =  function()
{
    ctx.textBaseline = "hanging";
};


this.Add = { ctx:this.ctx };

    this.Add.Line = function(X1,Y1,X2,Y2)
    {
        ctx.moveTo(X1, Y1);
        ctx.lineTo(X2, Y2);
    };

    this.Add.Rect = function(x1,y1,x2,y2)
    {
        ctx.fillRect(x1 , y1 , x2, y2);
    };

    this.Add.Text = function(msg, x,y)
    {
        ctx.font = '20px Sans-Serif';
        ctx.textBaseline = 'Top';
        ctx.fillText (msg, x, y);
    };

    this.Add.Circle = function(X,Y,Radius)
    {
        ctx.beginPath();
        ctx.arc(X,Y,Radius,0,Math.PI *2,false);
        ctx.fill();
        ctx.closePath();
    };

    this.Add.Sun = function(X,Y, size)
    {
        ctx.strokeStyle = "#FF0";
        ctx.lineWidth = 1;
        var color =  "#FFFF00";
        ctx.shadowBlur = 80;
        ctx.shadowColor = color;

        ctx.beginPath();
        ctx.arc(X, Y, size, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();

        ctx.stroke();
        c.closePath();
    };

    this.Add.Arc = function(X,Y,Radius,sAngle,eAngle,anticlockwise)
    {
        ctx.beginPath();
        ctx.arc(X,Y,Radius,sAngle,eAngle,anticlockwise);
        ctx.fill();
        ctx.closePath();
    };

    this.Add.ArcTo = function(x1,y1,x2,y2,radius)
    {
        ctx.beginPath();
        ctx.arcTo(x1,y1,x2,y2,radius);
    };

}

//Random
this.RandomNext = function(int){
    var _rnd = Math.random();
    var _flot = _rnd * int;
    var _int = Math.floor(_flot);

    var result = {R:_rnd, F:_flot,I:_int};
    return result;
}

Fwrk();


//==============
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
