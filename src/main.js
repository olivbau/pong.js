import Player from './Player'

export default class Pong {
	constructor (height, width) {
		this.height = height
		this.width = width
		this.playerA = new Player()
		this.playerB = new Player()
	}
}