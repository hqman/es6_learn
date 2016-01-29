// for (let i = 0; i < 3; i++) {
//     console.log('i:', i);
// }
'use strict'
function object (o){
    var F =new Function();
    F.prototype=o;
    return new F();
}
var parent = {name :"papa"};

var child = Object.create(parent);

// console.log(child.name);

var child2 =object(parent);

// console.log(child2.name);
//
var color = "red"

var speed = 10
function go (){
    console.log("go");
}
var car =  {
    color,
    speed,
    go
}

car.go();
console.log(car.color)

function mixin(dest/*, objects */ ){
  var sources =Array.prototype.slice.call(arguments,1);
  var s_len=sources.length;
  for(var i=0;i<s_len;i++){
    for(var key in sources[i] ){
      dest[key]=sources[i][key];
    }
  }
    return dest;
}
export var e = 2.71828182846;
