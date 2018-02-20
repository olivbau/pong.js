(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.pong = factory());
}(this, (function () { 'use strict';

/**
 * 
 * 
 * @export
 * @class Player
 */
class Player {
	/**
	 * Creates an instance of Player.
	 * @memberof Player
	 * @constructor
	 */
	constructor () {
	}
}

/**
 * 
 * 
 * @export
 * @class Pong
 */
class Pong$1 {
	/**
	 * Creates an instance of Pong.
	 * @param {any} height 
	 * @param {any} width 
	 * @memberof Pong
	 * @constructor
	 */
	constructor (height, width) {
		this.height = height;
		this.width = width;
		this.playerA = new Player();
		this.playerB = new Player();
	}
}

return Pong$1;

})));
