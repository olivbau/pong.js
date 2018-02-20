import Player from './Player'

/**
 * The pong class
 * @class Pong
 * @param {number} height 
 * @param {number} width 
 */
export default class Pong {
	constructor (height, width) {
		this.height = height
		this.width = width
		this.playerA = new Player()
		this.playerB = new Player()
    }
}