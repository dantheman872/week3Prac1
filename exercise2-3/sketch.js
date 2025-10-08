let cX = 300
let cY = 300

function setup(){

    createCanvas(600,600)
}

function draw(){

    background(255)
    rectMode(CENTER)
    if (mouseIsPressed && mouseX < cX+25 && mouseX > cX-25 && mouseY < cY+25 && mouseY > cY-25 ){

        fill(0,170,180)
        strokeWeight(5)
        stroke(255,50,50,220)
        square(mouseX,mouseY,200)
        cY = mouseY
        cX = mouseX
        
    } else {

        fill(50,220,230)
        strokeWeight(1)
        square(cX,cY,200)
    }
}