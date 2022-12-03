let speed = 20;
let scale = 0.17; 
let canvas;
let ctx;
let logoColor;

let meow  = {
    x: 200,
    y: 300,
    xspeed: 10,
    yspeed: 10,
    img: new Image()
};

(function main(){
    canvas = document.getElementById("screen");
    ctx = canvas.getContext("2d");
    meow.img.src = 'meow.png';

    // screen
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    pickColor();
    update();
})();

function update() {
    setTimeout(() => {
        // canvas background
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // icon and background
        ctx.fillStyle = logoColor;
        ctx.fillRect(meow.x, meow.y, meow.img.width*scale, meow.img.height*scale);
        ctx.drawImage(meow.img, meow.x, meow.y, meow.img.width*scale, meow.img.height*scale);
        // transition icon
        meow.x+=meow.xspeed;
        meow.y+=meow.yspeed;
        // verify collision 
        checkHitBox();
        update();   
    }, speed)
}

// verify border collision
function checkHitBox(){
    if(meow.x+meow.img.width*scale >= canvas.width || meow.x <= 0){
        meow.xspeed *= -1;
        pickColor();
    }
        
    if(meow.y+meow.img.height*scale >= canvas.height || meow.y <= 0){
        meow.yspeed *= -1;
        pickColor();
    }    
}

// generate a random color in RGB format
function pickColor(){
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    logoColor = 'rgb('+r+','+g+', '+b+')';
}