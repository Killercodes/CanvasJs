const canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var edit = document.getElementById('edit');
var code = textarea.value;

function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    eval(textarea.value);
}

reset.addEventListener('click', function() {
    //textarea.value = code;
    //drawCanvas();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

edit.addEventListener('click', function() {
    textarea.focus();
})

run.addEventListener('click', drawCanvas);
//window.addEventListener('load', drawCanvas);

/*
class Canvas
{
    constructor(id){
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");
        this.mouse = {x:undefined,y:undefined}

    }

    Init(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight; 
    }

    Context (){
        return this.ctx;
    }

    OnResize(evnHandler){
        window.addEventListener('resize',function(){
            Init();
            evnHandler();
        });
    }

    RegisterMouseMove(){
        window.addEventListener('mousemove',function(e){    
            mouse.x = e.x;
            mouse.y = e.y;
        });
    }
}
*/

