import Rectangle from './Rectangle'
/**
 * The ball class
 * @class Ball
 * @param {Object} options 
 */
export default class Ball extends Rectangle {
	constructor (x, y, height, width, speed, angle) {
        super(x, y, height, width, speed, angle)
    }
    
    /**
     * @param  {number} delta
     */
    update (delta = 1) {
        this.x += (this.speed*Math.cos(this.angle))*delta
        this.y += -1*(this.speed*Math.sin(this.angle))*delta
    }

}