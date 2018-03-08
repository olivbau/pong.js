/**
 * The paddle class
 * @class Paddle
 * @param {Object} options 
 */
class Paddle {
	constructor (options = {}) {
		this.x = options.x;
		this.y = options.y;
		this.w = options.w;
		this.h = options.h;
		this.speed = options.speed | this.h*4;
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

/**
 * The ball class
 * @class Ball
 * @param {Object} options 
 */
class Ball {
	constructor (options) {
		this.x = options.x;
		this.y = options.y;
		this.w = options.w;
		this.h = options.h;
        this.speed = options.speed | this.w*50;
        this.radius = options.radius | 0;
    }
    
    /**
     * @param  {number} delta
     */
    update (delta) {
        this.x += (this.speed*Math.cos(this.radius))*delta;
        this.y += (this.speed*Math.sin(this.radius))*delta;
    }

}

/**
 * Returns a random number between the specified values. The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max.
 * @param  {number} min
 * @param  {number} max
 */

class Pong {
	constructor (options = {}) {
		this.height = options.height | 400;
		this.width = options.width | 400;

		if (!options.paddleA) {
			let paddleAOptions = {
				x: this.width/20,
				y: this.height/2,
				w: this.width/100,
				h: this.height/4
			};
			options.paddleA = new Paddle(paddleAOptions);
		}
		this.paddleA = options.paddleA;

		if (!options.paddleB) {
			let paddleBOptions = {
				x: this.width - this.width/20,
				y: this.height/2,
				w: this.width/100,
				h: this.height/4
			};
			options.paddleB = new Paddle(paddleBOptions);
		}
		this.paddleB = options.paddleB;

		if (!options.ball) {
			let ballOptions = {
				x: this.width/2,
				y: this.height/2,
				w: this.width/100,
				h: this.width/100
			};
			options.ball = new Ball(ballOptions);
		}
		this.ball = options.ball;
		
	}
	
    /**
     * @param  {number} delta
     */
    update (delta) {
		if(!delta) delta = 1;

		this.paddleA.update(delta);
		this.paddleB.update(delta);
		this.ball.update(delta);
	}

}

export default Pong;
