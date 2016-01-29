'use strict'
const value ="kk";

var a =1;
var b=99 ;

console.log(` ${value} ${a+b} ${new Date()} asdf haha`);

function tag (strings  ) {
    // body...
    console.log(strings);
}
var message = tag`adf 12 kk`;

let msg = "hi";
{
    let msg = 'bye';
}


console.log(msg);

var fs = [];

for (let i =0  ;i<10;i++) {
     fs.push(function  () {
         // body...
         console.log(i);
     });
};
fs.forEach(function (f){
    f();
});