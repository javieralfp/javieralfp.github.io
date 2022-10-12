console.log("external")

console.log("top")
// console.log(a)
console.log(b) //vars are hoisted
// console.log(c)
{
    console.log("top block")
    // console.log(a)
    console.log(b)
    // console.log(c)
    a = 1
    var b = 2
    let c = 3
    console.log("bottom block")
    console.log(a)
    console.log(b)
    console.log(c)
}

console.log("bottom")
console.log(a)
console.log(b)
// console.log(c)

//Arrow functions
// hello: tradition functino to return hello
function hello(){return "hello"}
console.log(hello())
console.log("hello") // these are the same thing essentially
console.log(hello) // logs the function description

// hello1: return "hello1"
let hello1 = () => "hello1" // or => {return "hello"}, also you could make it const bc it's never going to change
hello1() //it'll execute it but nothing will happen bc you don't output it anywhere
console.log(hello1())

// hello2: console.log "hello2"
const hello2 = () => {console.log("hello2")} //this output is undefined for the variable
hello2()

// hello3: alert("hello3")
const hello3 = () => {alert("hello3")}
//hello3()

// c to f
const c2f = (c) => c * (9 / 5) + 32

//dom object button and you can add an event listener to it using js
//the console is also the dom?

//change event of button through id
let bb = document.getElementById("b")
bb.onclick = () => console.log("yoooo")

// from w2schools
//dom object
const para = document.createElement("p")
para.innerText = "This is a paragraph"
document.body.appendChild(para);

//json (js object notation) dunno what that means tho
//a stricter defined js object

//js object
let obj = {
    animal: "dog",
    legs: ["fl", "fr", "bl", "br"],
    name: "fido",
    sound: () => "arf"
}

//json object, you cna't have fucntions, but you could have an array
let objj = {
    animal: "dog",
    name: "fido"
}

