// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();// Immediate invoke 


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // here we can pass the args from the paranthesis that will be accepted as parameter and used in the function.