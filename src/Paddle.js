import Rectangle from './Rectangle'
/**
 * The paddle class
 * @class Paddle
 * @param {Object} options 
 * @param {number} options.x - x position
 * @param {number} options.y - y position
 * @param {number} options.width - width
 * @param {number} options.height - height
 */
export default class Paddle extends Rectangle {
	constructor (x, y, width = 1, height = 1) {
		super(x, y, width, height)
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