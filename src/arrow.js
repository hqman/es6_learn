var greeting = (message = "hello", name) => message + " " + name;

console.log(greeting())

// Lexical this
var bob = {
    _name: "Bob",
    _friends: ['kk', 'bb'],
    printFriends() {
        this._friends.forEach(f =>
            console.log(this._name + " knows " + f));
    },
    haveFirends() {
        var that = this;
        this._friends.forEach(function(f) {
            console.log(that._name + " have " + f);
        })
    }
};

// bob.printFriends()
bob.haveFirends()


function receive(callback = () => {
    console.log("function defualt")
}) {
    callback();
}

receive();

var {
    color
} = {
    color: "blue"
};

console.log(color);

function rObject() {
    return {
        name: "object",
        state: "state"
    }
}

var {
    name, state
} = rObject();

console.log(name, state);
var {
    name: firstName,
    state: location
} = rObject();

console.log(firstName, location);


var [first, , third] = [1, 2, 3];

console.log(first, third)


var persons = [{
    name:"adf",
    age:2
},{
 name:"werew",
    age:32
} ];

 persons.forEach(({name}) => {console.log(name)})


var fs = [];
 for (let i =0; i < 10; i++) {

    fs.push(function(){
        console.log(i)
    });
      }

fs.forEach((f)=>f());

function tag(strings, ...values){
    console.log(strings,values);
}

var ss =tag`
    ajkdf${first} ${1+8}
adsf
        daf
    asdf
            `

// console.log(`
//     ajkdf${first} ${1+8}
// adsf
//         daf
//     asdf
//             `)
