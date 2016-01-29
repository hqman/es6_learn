function* greet(){
    console.log("开始");
    let hello = yield "你好啊";

    console.log(" 你叫什么名字啊?" +hello);

    yield hello+"王凯";
}


var greeter = greet();

console.log(greeter.next())

console.log(greeter.next("上次返回值"))

console.log(greeter.next())

import  * as _   from "lodash";


console.dir(_ );
