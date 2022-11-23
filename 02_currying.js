//currying
let sum=function (a){
    return function(b){
        return function (c){
            return function (d){
                console.log(a+b+c+d);
            }
        }
    }
}

sum(2)(3)(4)(5)