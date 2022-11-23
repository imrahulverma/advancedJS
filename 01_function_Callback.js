// function hello(){

//     console.log("Hello")
// }

// function add(a,b,callback){

//     sum=a+b;
//     console.log(sum)
//     callback();
// }

// add(4,4,hello);



function add(a,b){
console.log(a+b)

}

function calculate(a,b,callback){

callback(a,b);
    
}
calculate(4,6,add)