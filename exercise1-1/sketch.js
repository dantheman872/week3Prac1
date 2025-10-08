let circleX = 20;
let circleY = 20;
let circleW = 40;
//let r, g, b;

function setup() {
    frameRate(60);
    createCanvas(600, 400);
    noStroke();
    background(0);
 //   r = random(120,200);
    g = random(10, 255);
    b = random(255);
}

function draw() {
    fill(0, g, b);
    circle(circleX, circleY, circleW);
    if (circleX === width - circleW / 2) {
        circleY = (circleY + circleW) % height;
    }
    circleX = (circleX + circleW) % width;
    console.log("X:"+circleX)
    console.log("Y"+circleY)
 //   r = (r + random(0,3)) % 255;
 //   g = (g + random(0,3)) % 255;
 //   b = (b + random(0,3)) % 255;
    b = (b + 1) % 255;
}