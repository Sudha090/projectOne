// Scope ,lexical environment,scopechaining


//  SCOPE -- IT IS THE ACCESSIBILITY OF VARIABLES AND FUNCTIONS IN A PARTICULAR PART OF THE CODE. SCOPE CAN BE OF THREE TYPES -- GLOBAL SCOPE, FUNCTION SCOPE AND BLOCK SCOPE. GLOBAL SCOPE IS THE OUTERMOST SCOPE AND IT CAN BE ACCESSED FROM ANYWHERE IN THE CODE. FUNCTION SCOPE IS THE SCOPE WHICH IS CREATED BY A FUNCTION AND IT CAN BE ACCESSED ONLY WITHIN THAT FUNCTION. BLOCK SCOPE IS THE SCOPE WHICH IS CREATED BY A BLOCK OF code and it can be accessed only within that block of code.

// var a = 10; 
//  global scope
// function b(){ .
    // function scope
    // var x = 2; 
    // function scope
    // console.log("Hello World");
// }                                           
// console.log(a); // 10
// b(); // Hello World
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

// var a="global variable and it is in global scope";
// function outer(){
//     var b = "outer variable and it is in outer scope";  
//     function inner(){
//         var c = "inner variable and it is in inner scope";
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }                       
//     inner();
// }

// outer();

// let &const in js and temporald dead zone

// let & const declarations are hoisted  or not?
// temporal dead zone is the time between the hoisting of a variable and its initialization. During this time, the variable is in a temporal dead zone and cannot be accessed. If we try to access the variable during this time, it will throw a ReferenceError.  

// let & const declarations are hoisted but they are not initialized. They are in a temporal dead zone until they are initialized. If we try to access them before initialization then it will throw a ReferenceError.
        // FIRST WAY========
// console.log(b);

// let a=10;
// var b=100;//undefined
//   SECOND WAY============
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 10;
// var b = 100; // undefined

// console.log(b); // undefined
//   third way ==============================
// let a=100;
// console.log(a); // 100
// a=200;
// console.log(a); // 200
// a=333;
// console.log(a); // 333--- let allows us to reassign the value of a variable but it does not allow us to redeclare the variable. If we try to redeclare the variable then it will throw a SyntaxError.

// let a=100; // SyntaxError: Identifier 'a' has already been declared

//   fourth way ==============================

// let a;
// console.log(a); // undefined-- if we declare a variable without initializing it then it will be undefined. We can also initialize the variable later in the code.
// a=100;
// console.log(a); // 100  

// FIFTH WAY==============================

// console.log(x);
// // -- ReferenceError: x is not defined 
// let a=20;
// var b=100;

// console.log(window.b); // 100
// console.log(window.a); // undefined-- let and const declarations do not create a property on the global object (window in browsers), while var declarations do. Therefore, window.a is undefined, while window.b is 100.
// console.log(this.b); // 100 
// console.log(this.a); // undefined-- same reason as above, this.a is undefined because let does not create a property on the global object.


// let & const

// let a = 10; // we can reassign the value of a variable declared with let but we cannot redeclare it. If we try to redeclare it then it will throw a SyntaxError.
// eg:
// let a=10;
// a=20; // we can reassign the value of a variable declared with let
// console.log(a); // 20

// let a=10;
// var a=100; // we can redeclare a variable declared with var but we cannot redeclare a variable declared with let. If we try to redeclare a variable declared with let then it will throw a SyntaxError.

// let a=10;
// var b=10;
// var b=100; // we can redeclare a variable declared with var
// console.log(a); // 10


// const // we cannot reassign the value of a variable declared with const. If we try to reassign it then it will throw a TypeError.

// let a=10;
// const b=20; // we cannot reassign the value of a variable declared with const. If we try to reassign it then it will throw a TypeError.


// let a;
// const b=100;
// a=10;
// b=200; // TypeError: Assignment to constant variable. We cannot reassign the value of a variable declared with const. If we try to reassign it then it will throw a TypeError.
// console.log(a); // 10

// let a;
// const b; 
// -- SyntaxError: Missing initializer in const declaration. We cannot declare a variable with const without initializing it. If we try to do that then it will throw a SyntaxError.  
// b=20; // TypeError: Assignment to constant variable. We cannot reassign the value of a variable declared with const. If we try to reassign it then it will throw a TypeError.
// console.log(a); // undefined


// let a;
// const b=100;
// a=10;
// b=200; // TypeError: Assignment to constant variable. We cannot reassign the value of a variable declared with const. If we try to reassign it then it will throw a TypeError.
// console.log(a); // 10 
// console.log(b); // 100
// 
