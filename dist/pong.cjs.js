'use strict';

class Rectangle {
    constructor(x = 0, y = 0, width = 1, height = 1, speed = 100, angle = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.angle = angle;
    }
    get left() {
        return this.x - this.width/2;
    }
    get right() {
        return this.x + this.width/2;
    }
    get top() {
        return this.y - this.height/2;
    }
    get bottom() {
        return this.y + this.height/2;
    }

    set top(value) {
        this.y = value + this.height/2;
    }
    set bottom(value) {
        this.y = value - this.height/2;
    }
    set left(value) {
        this.x = value + this.width/2;
    }
    set right(value) {
        this.x = value - this.width/2;
    }
}

class Paddle extends Rectangle {
	constructor (x, y, width = 1, height = 1) {
		super(x, y, width, height);
		this.direction = 0;
	}

	up () {
		this.direction = -1;
	}

	down () {
		this.direction = 1;
	}

	release() {
		this.direction = 0;
	}

	/**
     * @param  {number} delta
     */
    update (delta) {
		this.y += this.direction*this.speed*delta;
    }
}

class Ball extends Rectangle {
	constructor (x, y, height, width, speed, angle) {
        super(x, y, height, width, speed, angle);
    }
    
    /**
     * @param  {number} delta
     */
    update (delta = 1) {
        this.x += (this.speed*Math.cos(this.angle))*delta;
        this.y += -1*(this.speed*Math.sin(this.angle))*delta;
    }

}

/**
 * The pong class
 * @class Pong
 * @param {Object} options - Pong options
 * @param {number} [options.width = 400] - Pong width
 * @param {number} [options.height = 400] - Pong height
 */
class Pong {
	constructor ({
		width = 400,
		height = 400,
		winningScore = 5,
		scoreA = 0,
		scoreB = 0,
		paddleA = new Paddle(width/20, height/2, width/100, height/4),
		paddleB = new Paddle(width - width/20, height/2, width/100, height/4),
		ball = new Ball(width/2, height/2, width/100, width/100, 400, 0)
	} = {}) {
		this.width = width;
		this.height = height;
		this.winningScore = winningScore;
		this.scoreA = scoreA;
		this.scoreB = scoreB;
		this.paddleA = paddleA;
		this.paddleB = paddleB;
		this.ball = ball;
		this.endOfSet = false;
		this.endOfMatch = false;
	}
	
    /**
     * @param  {number} delta
     */
    update (delta = 1) {
		this.paddleA.update(delta);
		this.paddleB.update(delta);
		if (this.endOfMatch) return
		this.ball.update(delta);

		this.resolveEdgeCollision();
		this.resolvePaddleCollision();
		this.checkEndOfSet();
	}

	resolveEdgeCollision () {
		if(this.ball.top < 0) {
			this.ball.top = 0;
			this.ball.angle *= -1;
		}
		else if(this.ball.bottom > this.width) {
			this.ball.bottom = this.height;
			this.ball.angle *= -1;
		}
	}

	resolvePaddleCollision() {
		if(this.endOfSet) return
		this.endOfSet = false;
		if(this.ball.left < this.paddleA.right || this.ball.right > this.paddleB.left) {
			this.endOfSet = true;
		}
		if(this.ball.left < this.paddleA.right && this.ball.bottom > this.paddleA.top && this.ball.top < this.paddleA.bottom) {
			this.ball.left = this.paddleA.right;
			this.ball.angle -= Math.PI;
			this.endOfSet = false;
		}
		else if (this.ball.right > this.paddleB.left && this.ball.bottom > this.paddleB.top && this.ball.top < this.paddleB.bottom) {
			this.ball.right = this.paddleB.left;
			this.ball.angle += Math.PI;
			this.endOfSet = false;
		}
	}

	scored (player) {
		if (player == 'A') this.scoreA++;
		if (player == 'B') this.scoreB++;
		if (this.scoreA >= this.winningScore || this.scoreB >= this.winningScore) this.endOfMatch = true;
	}

	checkEndOfSet () {
		if (this.endOfSet) {
			if (this.ball.right < 0) {
				this.scored('B');
			}
			else if (this.ball.left > this.width) {
				this.scored('A');
			}
			if (this.ball.right < 0 || this.ball.left > this.width) this.resetSet();
		}
	}
	
	resetSet () {
		let angle = Math.random()*(Math.PI/4);
		angle *= Math.random()>0.5?1:-1;
		angle += Math.random()>0.5?0:Math.PI;
		this.ball = new Ball(this.width/2, this.height/2, this.width/100, this.width/100, 400, angle);
		this.endOfSet = false;
	}

	resetMatch () {
		this.endOfMatch = false;
		this.scoreA = 0;
		this.scoreB = 0;
		this.resetSet();
	}

}

module.exports = Pong;
