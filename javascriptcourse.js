// Scope ,lexical environment,scopechaining


//  SCOPE -- IT IS THE ACCESSIBILITY OF VARIABLES AND FUNCTIONS IN A PARTICULAR PART OF THE CODE. SCOPE CAN BE OF THREE TYPES -- GLOBAL SCOPE, FUNCTION SCOPE AND BLOCK SCOPE. GLOBAL SCOPE IS THE OUTERMOST SCOPE AND IT CAN BE ACCESSED FROM ANYWHERE IN THE CODE. FUNCTION SCOPE IS THE SCOPE WHICH IS CREATED BY A FUNCTION AND IT CAN BE ACCESSED ONLY WITHIN THAT FUNCTION. BLOCK SCOPE IS THE SCOPE WHICH IS CREATED BY A BLOCK OF code and it can be accessed only within that block of code.

var a = 10; // global scope
function b(){ // function scope
    var x = 2; // function scope
    console.log("Hello World");
}                                           
console.log(a); // 10
b(); // Hello World
// console.log(x); // Uncaught ReferenceError: x is not defined 


// LEXICAL SCOPE --IT IS THE SCOPE WHICH IS DEFINED BY THE POSITION OF THE FUNCTION IN THE CODE. IT IS ALSO CALLED AS STATIC SCOPE. IN LEXICAL SCOPE THE INNER FUNCTION CAN ACCESS THE VARIABLES OF THE OUTER FUNCTION BUT THE OUTER FUNCTION CANNOT ACCESS THE VARIABLES OF THE INNER FUNCTION.        

// function a(){
// console.log(b);

// }
// var b = 10;
// a();

// console .log(a);
// function a(){
// console.log(b);

// }

// a();
// var b = 10;

// function a(){
// var b = 10;
// function c(){
//     console.log(b);

// }
// c();
// }
// a();


// function a(){

// function c(){
//     console.log(b);

// }
// c();
// }
// var b = 10;
// a();

// function a(){
// function c(){
//     var b = 10;
//     }
// c();
// }
// a(); 
// console.log(b);       


// SCOPE CHAINING -- IT IS THE PROCESS OF LOOKING UP THE VARIABLES IN THE SCOPE CHAIN. WHEN A VARIABLE IS NOT FOUND IN THE CURRENT SCOPE THEN THE JAVASCRIPT ENGINE LOOKS UP THE VARIABLE IN THE OUTER SCOPE AND THIS PROCESS CONTINUES UNTIL THE VARIABLE IS FOUND OR THE GLOBAL SCOPE IS REACHED. IF THE VARIABLE IS NOT FOUND THEN IT RETURNS UNDEFINED.

var a="global variable and it is in global scope";
function outer(){
    var b = "outer variable and it is in outer scope";  
    function inner(){
        var c = "inner variable and it is in inner scope";
        console.log(a);
        console.log(b);
        console.log(c);
    }                       
    inner();
}

outer();


