const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];

//fix stretching
window.addEventListener("resize", () => {
  //fill entire width and height with canvas on resize
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "white";
  ctx.fillRect(10, 10, 50, 50);
});

console.log(ctx);

//Rectangle
ctx.fillStyle = "white";
ctx.fillRect(10, 10, 50, 50);

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

canvas.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
})


// function drawCircle() {
//   //Circle
//   //must begin path with lines
//   ctx.beginPath();
//   // x, y, radius, where to start drawing, and degrees
//   ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
//   //fill
//   ctx.fillStyle = "red";
//   ctx.fill();
//   //stroke
//   ctx.strokeStyle = "yellow";
//   ctx.lineWidth = 2;
//   ctx.stroke();
// }

class Particle {
    //each particle is one circle
    constructor(){
        // this.x = mouse.x;
        // this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        //change x and y coordinates based on speedX and speedY values -> particles move in all directions
        this.x += this.speedX;
        this.y +- this.speedY;
        if(this.size > 0.2) this.size -= 0.1;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function createParticles () {
    for (let i = 0; i < 100; i++){
        particlesArray.push( new Particle())
    }
}
createParticles();
console.log(particlesArray);

function handleParticles(){
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}

function animate(){
    //clear frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    // drawCircle();
    //calls function once -> and then runs over and over
    requestAnimationFrame(animate);
}
animate();