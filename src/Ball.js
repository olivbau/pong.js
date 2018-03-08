/**
 * The ball class
 * @class Ball
 * @param {Object} options 
 */
export default class Ball {
	constructor (options) {
		this.x = options.x
		this.y = options.y
		this.w = options.w
		this.h = options.h
        this.speed = options.speed | this.w*50
        this.radius = options.radius | 0
    }
    
    /**
     * @param  {number} delta
     */
    update (delta) {
        this.x += (this.speed*Math.cos(this.radius))*delta
        this.y += (this.speed*Math.sin(this.radius))*delta
    }

}