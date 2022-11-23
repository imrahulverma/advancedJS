// IIFE -Immediately invoked function expression

(function () {
    console.log("Hello World");
}())

//Higher order function

function user(name) {
    if (name == "rahul") {
        return function (topic) {
            console.log(`Hello ${name}. What is ${topic}`)}
    }
}

user("rahul")("UI");

let cand1=user("rahul")
cand1("JS")
