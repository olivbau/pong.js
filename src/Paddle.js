/**
 * The paddle class
 * @class Paddle
 * @param {Object} options 
 * @param {number} options.x - x position
 * @param {number} options.y - y position
 */
export default class Paddle {
	constructor (options = {}) {
		this.x = options.x
		this.y = options.y
		this.w = options.w
		this.h = options.h
		this.speed = options.speed | this.h*4
		this.direction = 0
	}

	up () {
		this.direction = -1
	}

	down () {
		this.direction = 1
	}

	release() {
		this.direction = 0
	}

	/**
     * @param  {number} delta
     */
    update (delta) {
		this.y += this.direction*this.speed*delta
    }
}