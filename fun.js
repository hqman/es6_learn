'use strict'

var arrowfun = (message,name) => {
    console.log(message ,name);
}

var square = x => x*x ;



arrowfun('kk','hi ');
console.log(square(2));


console.dir(Array.from([1,2,3]));


 Object.keys({name:"adf",age:45}).reduce((prev,next)=>{
        console.log(prev+" "+next);

        return prev+" "+next;
 },"start");
