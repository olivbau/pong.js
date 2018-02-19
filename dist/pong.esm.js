class Player {
	constructor () {
	}
}

class Pong {
	constructor (height, width) {
		this.height = height;
		this.width = width;
		this.playerA = new Player();
		this.playerB = new Player();
	}
}

export default Pong;
