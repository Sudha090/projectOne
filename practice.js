// LESSON-1
// JAVASCRIPT BASICS


// alert('hello');
// alert('good job!');
//  2+2;
// document.body.innerHTML ="helo";
// modify the content of the body tag

// EXERCISE-1


// alert('good morming');
// alert('sudha');
// console.log(10+5);
// console.log(20-5);
// console.log(2+2-5);
// document.body.innerHTML ="good morning sudha";
// document.body.innerHTML = 'sudha';


//CHALLENGE EXERCISES
// console.log(10+8+20);
// console.log(100-20-50+200);
// document.body.innerHTML = '...';

// LESSON-2
// NUMBERS AND MATH

// console.log(10+5);
// console.log(10-5);
// console.log(10*5);
// console.log(10/5);
// console.log(10%3);
// console.log(2**3);
// console.log(2+2+3+4);
// console.log(1.2+2.2);
// console.log(Math.round(2.2));
// console.log(Math.round(2.7));
// console.log(Math.round(2.5));
// console.log(Math.ceil(2.2));
// ceil means round up
// console.log(Math.ceil(2.7));
// console.log(Math.ceil(2.5));  
// console.log(Math.floor(2.2)); 
// floor means round down 

// EXERCISE-2


// console.log(10+(3*8)+5);
// console.log((10+(3*8)+5)/3);
// console.log((1850+2*750)/100);
// console.log((18.50+2*7.50)*0.1);
// console.log((18.50+2*7.50)*0.2);
// console.log((2095+799+1899)/100);
// console.log((2095+799+1899+499)/100);
// console.log((2095+799+1899+499)/100);
// console.log(Math.round(((2095+799+1899+499)*0.1))/100); 

// console.log((2095+799+1899+499)/100+Math.round(((2095+799+1899+499)*0.1))/100);  
// console.log(Math.floor(2.8)); 
// console.log(Math.ceil(2.2));

// Challenges exercises--covert the celsius to fahrenheit and vice versa

// console .log((25*9/5)+32);
// console.log((86-32)*5/9);
// console.log((-5*9/5)+32);

// LESSON-3
// STRINGS 
//  alert('hello world'); 
//  console.log('some'+' '+'text');  
//  console.log('some text'+' '+'some more text');//concatenation of strings==> joining of  more than 2 or morestrings 
// console.log(typeof 2);
// console.log(typeof 'hello world');
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log('hello'+3);
//js converts the number 3 to a string and then concatenates it with 'hello' to produce 'hello3'
// console.log('hello'+true);
 //js converts the boolean value true to a string and then concatenates it with 'hello' to produce 'hellotrue'
//  console.log ("the sum of 2 and 3 is "+(2+3));
// js evaluates the expression (2+3) to get 5, converts it to a string, and then concatenates it with 'the sum of 2 and 3 is ' to produce 'the sum of 2 and 3 is 5'
// console.log("items (" +(1+1)+'):'+'  ' +'$'+(2095+799)/100);
// js evaluates the expression (1+1) to get 2, converts it to a string, and then concatenates it with 'items (' and '): $' and the result of (2095+799)/100 to produce 'items (2): $28.94';
// alert("items (" +(1+1)+'):'+'  ' +'$'+(2095+799)/100 );
//  console.log("i'm learning js");
//  console.log('i\'m learning js');
//  alert('some \n text');
//  console.log('some \n text');
//  console.log('some \t text');
 // \n is used to create a new line and \t is used to create a tab space
//  console.log('some \\ text');
 // to print a backslash we need to use double backslash
//  console.log('some \' text');
//  console.log("some \" text");


 
//  console.log(`hello`);
 // template literals==> a new way to create strings in js using backticks
//  console.log(`items(${1+1}):   $${(2095+799)/100}`);
// template literals allow us to embed expressions inside strings using ${} and also preserve whitespace and newlines==interpolation of strings
// console.log(`some
//     text`);

// EXERCISE-3
// console.log('my name is ');
// console.log('sudha');
// console.log('my name is ' + 'sudha');
// console.log(`total cost:$${5+3}`);
// console.log('total cost:$'+(5+3));
// alert(`total cost:$${5+3}`);
// console.log('total cost:  $'+(599+295)/100);
// console.log(`total cost:  $${(599+295)/100}`);

// alert(`total cost:  $${(599+295)/100}`);
// alert(`total cost:  $${(599+295)/100}
// thank you, come again!`);


// CHALLENGES EXERCISES

// console.log(`items ($(1*2+1*2)): $${(2*2095+2*799)/100}`);
// console.log(`shipping &handling: $${(499+499)/100}`);
// console.log(`total before tax:  $${(2*2095+2*799+499+499)/100}`);
// console.log(`estimated tax (10%): $${Math.round(((2*2095+2*799+499+499))*0.1)/100}`);
// console.log(`total cost: $${Math.round(((2*2095+2*799+499+499)*0.1))/100+(2*2095+2*799+499+499)/100}`);