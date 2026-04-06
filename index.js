   
    // normal code   
//    var x=5;
//     function getName(){
//         console.log("Hello World");
//     }
//     getName();
//     console.log(x);

    // hoisting --     it is a mechanism where variables and functions are moved to the top of their scope before code execution.   
    // variabes and functions are hoisted to the top of their scope, but only the declarations are hoisted, not the initializations.  
    
    console.log(getName);
    getName();
    console.log(x);
    var x=5;
    function getName(){
        console.log("Hello World");
    }
    // console.log(getName);
   
    // console.log(getName);is a function declaration, so it is hoisted to the top of the scope.so it will print the function definition to the console.    
    // getName(); is a function call, so it will execute the function and print "Hello World" to the console.
    // console.log(x); is a variable declaration, so it is hoisted to the top of the scope, but it is not initialized until the line var x=5; is executed. Therefore, it will print undefined to the console before it is assigned the value 5.            
