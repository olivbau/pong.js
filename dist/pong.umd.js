(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.pong = factory());
}(this, (function () { 'use strict';

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

return Pong;

})));
