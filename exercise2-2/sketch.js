let fillColour;
let circleX, circleY

function setup(){

    createCanvas(600,600)
    fillColour = color(random(255), random(255), random(255))
    circleX = height/2
    circleY = width/2
}

function draw(){
    background(255)
    fill(fillColour);
    circle(circleX, circleY, 500)
}

function keyPressed(){

    if (keyCode == LEFT_ARROW){

        circleX += -5
    }

    if (keyCode == RIGHT_ARROW){

        circleX += 5
    }

    if (keyCode == UP_ARROW){

        circleY += -5
    }

    if (keyCode == DOWN_ARROW){

        circleY += 5
    }
}