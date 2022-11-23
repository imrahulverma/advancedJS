let counter ;
function add() {
    counter = 0;
    function c() {
        counter += 1
        console.log(counter)
    }
    c()
}

add();
console.log(counter)
