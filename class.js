'use strict'
import * as constants from './constants';
console.log(constants.A); // 1
console.log(constants.B); // 3

class Point {

    static print() {
        console.log("this is a static print")
    }
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }
    toString() {
        console.log("xxxx" + this.x + this.y);
        return "xxxx" + this.x + this.y;
    }
}

let p1 = new Point(5, 99);
p1.toString();
// console.log(Point.prototype.constructor === Point)

// console.log(Object.keys(p1))
console.log(p1.hasOwnProperty("x"));

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y)
        this.color = color
    }

    get pp() {
        return "pp"
    }

    set pp(value) {
        console.log(value)
    }

    toString() {
        return this.color + " extends " + super.toString()
    }
}

let cp = new ColorPoint(1, 5, "#adsf")

console.log( cp.toString() )

console.log(Object.getPrototypeOf(ColorPoint) === Point)


class MyArray extends Array {
    constructor(...args){
        super(...args)
    }
}

var arr = new MyArray(1,3,4);
console.log(arr)
console.log(Object.getOwnPropertyDescriptor(cp, "x") )
ColorPoint.print()

console.log(cp.pp)
cp.pp = "123pp"

{
    let aa = "我在里面"
    console.log(aa)
}
let log=console.log
// console.log(aa)
log("hello log")

const A_value=1
// A_value=2;
//
var aa =1 ;

log(global.aa);

function f ([x,y,z]) {
 log(x,y,z);
}

f([1,2,3]);


var  data = {name:"wang kai"};

log(`i am ${data.name}`);


