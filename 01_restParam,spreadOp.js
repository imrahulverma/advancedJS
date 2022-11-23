//rest parameter
//here we can any no of arguments
function hello(...args){
    console.log(`Hello ${args}`)
}

hello(1,4,6,4,6,3,2,6)

//here we can pass min 2 and any no of arguments

function hello(n1,n2,...args){
    console.log(`Hello ${n1},${n2},${args}`)
}

hello(1)
hello(1,2)
hello(1,2,4,6,3,763,2,6,8,264,4,6)


//Sum using rest parameter

function sum(...args){
let sum=0
    for(let a of args){
        sum+=a
    }
    console.log(sum);
}
sum(2,567,456)