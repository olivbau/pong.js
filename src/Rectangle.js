export default class Rectangle {
    constructor(x = 0, y = 0, width = 1, height = 1, speed = 100, angle = 0) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = speed
        this.angle = angle
    }
    get left() {
        return this.x - this.width/2;
    }
    get right() {
        return this.x + this.width/2;
    }
    get top() {
        return this.y - this.height/2;
    }
    get bottom() {
        return this.y + this.height/2;
    }

    set top(value) {
        this.y = value + this.height/2
    }
    set bottom(value) {
        this.y = value - this.height/2
    }
    set left(value) {
        this.x = value + this.width/2
    }
    set right(value) {
        this.x = value - this.width/2
    }
}