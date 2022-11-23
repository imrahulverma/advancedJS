// call by value
let a=10;
let b=a;
console.log(`a=${a}`)
console.log(`b=${b}`)
a=a+6
b=b+7
console.log(`b=${b}`)
console.log(`a=${a}`)

// call by reference

let obj1={
    fname:"Rahul",
    lname:"kumar"
}

let obj2=obj1;

console.log(obj1)
console.log(obj2)

obj2.lname="verma"

console.log(obj1)




