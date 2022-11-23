
// we can call a function before its declaration
// declaration is moved to top in js before execution
// declaration of function returns function

sum(4,5)

function sum(a,b){
    console.log(a+b)
}


// declaration of variable returns undefined

console.log(x)

var x=12;

//declaration of function declartion using variable also return undefined

fun();

var fun=()=>{ 

    console.log("Hello")
}



