
// global object window and this keyword in JavaScript 
// var a=10;
// function b(){
//     var x = 2;
//     console.log("Hello World");
// }
// console.log(window.a);
// console.log(this.a);
// console.log(window.b);
// console.log(x);

// undefined and not defined in JavaScript
var a;
console.log(a);// undefined
// console.log(b);
// not defined
a=10;
if (a === undefined) {
    console.log("a is undefined");
}   else {
    console.log("a is defined");
}
console.log(a);

// javascript is aloosly typed language
var a = 10;
console.log(a);
a = "Hello World";      
console.log(a);
a = true;
console.log(a);