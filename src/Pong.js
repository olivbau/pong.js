import Player from './Player'

/**
 * The pong class
 * @class Pong
 * @param {object} options 
 */
export default class Pong {
	constructor (options) {
		this.height = options.height
		this.width = options.width
		this.playerA = new Player()
		this.playerB = new Player()
	}
	
    /**
     * @param  {number} delta
     */
    update (delta) {

    }
}