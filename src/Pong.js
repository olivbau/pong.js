import Paddle from './Paddle'
import Ball from './Ball'
import { constrain } from './utils';




/**
 * The pong class
 * @class Pong
 * @param {Object} options 
 */
export default class Pong {
	constructor (options = {}) {
		this.height = options.height | 400
		this.width = options.width | 400

		if (!options.paddleA) {
			let paddleAOptions = {
				x: this.width/20,
				y: this.height/2,
				w: this.width/100,
				h: this.height/4
			}
			options.paddleA = new Paddle(paddleAOptions)
		}
		this.paddleA = options.paddleA

		if (!options.paddleB) {
			let paddleBOptions = {
				x: this.width - this.width/20,
				y: this.height/2,
				w: this.width/100,
				h: this.height/4
			}
			options.paddleB = new Paddle(paddleBOptions)
		}
		this.paddleB = options.paddleB

		if (!options.ball) {
			let ballOptions = {
				x: this.width/2,
				y: this.height/2,
				w: this.width/100,
				h: this.width/100
			}
			options.ball = new Ball(ballOptions)
		}
		this.ball = options.ball
		
	}
	
    /**
     * @param  {number} delta
     */
    update (delta) {
		if(!delta) delta = 1

		this.paddleA.update(delta)
		this.paddleB.update(delta)
		this.ball.update(delta)
	}

}