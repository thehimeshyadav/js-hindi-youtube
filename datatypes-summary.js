// primitive

// 7 types : String, Number, Boolearn, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman,", "naagraj", "doga"];
let myObj = {
    name: "himesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log( typeof anotherId);





// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive), Heap (Non-primitive)

let myYoutubename = "hiteshchoudarydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
