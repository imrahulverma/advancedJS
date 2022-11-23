// function definition by expression

let h=function hello(){
    console.log("Hello")
}
h();

let k=function add(a,b){
    return a+b;
}

console.log(k(4,5));

// anonymous function

let  hello=function(){
    console.log("i am anonymous function")
}
hello();

let sub=function(a,b){
    return a-b;
}

console.log(sub(9,5))

// arrow function

let div=(a,b)=>{
    return a/b

}
console.log(div(10,5))

//single line function

let greet=()=>console.log("hello")

greet();