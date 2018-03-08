const width = 400
const height = 400


function setup() {
    createCanvas(width, height)
    frameRate(60);
    pong = new Pong()
}

function keyReleased() {
    if (keyCode === 87 || keyCode === 83) pong.paddleA.release()
    if (keyCode === 80 || keyCode === 76) pong.paddleB.release()
}

function keyPressed() {
    switch (keyCode) {
        case 87: // w is presses
            pong.paddleA.up()
            break;
        case 83: // s is presses
            pong.paddleA.down()
            break;
        case 80: // p is presses
            pong.paddleB.up()
            break;
        case 76: // l is presses
            pong.paddleB.down()
            break;
        default:
            break;
    }
    return false; // prevent default
  }

function draw() {
    background(0);
    
    drawPaddle(pong.paddleA)
    drawPaddle(pong.paddleB)
    drawBall(pong.ball)

    // if avoid division by 0
    if(frameRate()) pong.update(1/frameRate())
}

function drawPaddle(paddle) {
    fill(255);
    strokeWeight(0);
    rectMode(CENTER);
    rect(paddle.x, paddle.y, paddle.w, paddle.h);    
}

function drawBall(ball) {
    fill(255);
    strokeWeight(0);
    rectMode(CENTER);
    rect(ball.x, ball.y, ball.w, ball.h);    
}