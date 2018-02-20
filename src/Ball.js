/**
 * The ball class
 * @class Ball
 * @param {object} options 
 */
export default class Ball {
	constructor (options) {
		this.x = options.x
		this.y = options.y
        this.speed = 50
        this.radius = 0
    }
    
    /**
     * @param  {number} delta
     */
    update (delta) {

    }
}