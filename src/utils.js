export function collideLineRect(x1, y1, x2, y2, rx, ry, rw, rh, calcIntersection) {
    // check if the line has hit any of the rectangle's sides. uses the collideLineLine function above
    var left, right, top, bottom, intersection;

    if(calcIntersection){
        left =   collideLineLine(x1,y1,x2,y2, rx,ry,rx, ry+rh,true);
        right =  collideLineLine(x1,y1,x2,y2, rx+rw,ry, rx+rw,ry+rh,true);
        top =    collideLineLine(x1,y1,x2,y2, rx,ry, rx+rw,ry,true);
        bottom = collideLineLine(x1,y1,x2,y2, rx,ry+rh, rx+rw,ry+rh,true);
        intersection = {
            "left" : left,
            "right" : right,
            "top" : top,
            "bottom" : bottom
        }
    }else{
        //return booleans
        left =   collideLineLine(x1,y1,x2,y2, rx,ry,rx, ry+rh);
        right =  collideLineLine(x1,y1,x2,y2, rx+rw,ry, rx+rw,ry+rh);
        top =    collideLineLine(x1,y1,x2,y2, rx,ry, rx+rw,ry);
        bottom = collideLineLine(x1,y1,x2,y2, rx,ry+rh, rx+rw,ry+rh);
    }

    // if ANY of the above are true, the line has hit the rectangle
    if (left || right || top || bottom) {
        if(calcIntersection){
        return intersection;
        }
        return true;
    }
    return false;
}

export function collideLineLine(x1, y1, x2, y2, x3, y3, x4, y4,calcIntersection) {
    var intersection;

    // calculate the distance to intersection point
    var uA = ((x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));
    var uB = ((x2-x1)*(y1-y3) - (y2-y1)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));

    // if uA and uB are between 0-1, lines are colliding
    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {

        if(calcIntersection){
        // calc the point where the lines meet
        var intersectionX = x1 + (uA * (x2-x1));
        var intersectionY = y1 + (uA * (y2-y1));
        }

        if(calcIntersection){
        intersection = {
            "x":intersectionX,
            "y":intersectionY
        }
        return intersection;
        }else{
        return true;
        }
    }
    if(calcIntersection){
        intersection = {
        "x":false,
        "y":false
        }
        return intersection;
    }
    return false;
}

/**
 * Returns a random number between the specified values. The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max.
 * @param  {number} min
 * @param  {number} max
 */
export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export function constrain(n, low, high) {
    return Math.max(Math.min(n, high), low);
}

export function normalizeHalfRadian(n) {
    var h = Math.PI;
    return mod(n + h, h * 2) - h;
}

export function mod(x, m) {
    return (x % m + m) % m;
}