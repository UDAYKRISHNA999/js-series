//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){ // inner function can access the values of a variable that is declared in outer function 
        const website = "youtube">
        console.log(username);
    }
    // console.log(website); //This will encounter an error (but outer fun can't access the values of variable declared in inner fun)
     two()
}

// one()
/* 
    because the outer fun will become the global scope for the inner fun
*/

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); //hitesh youtube
    }
    // console.log(website); // error
}

// console.log(username);// error


// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}

addTwo(5) // can't access before initialization
const addTwo = function(num){
    return num + 2
}
