// Function - is a way to group code together , we can run it anywhere anytime

// Function declareation

function sayHello(){
    console.log("hello world");
}
// Calling a function
sayHello();


// /another example - 
// declareing a function - 

function display(){
    console.log("hello world1")
}
// invoking or calling a function
display();



// TYPES OF FUNCTION - 

function add(x,y){  //x,y are called parameters
    console.log(x+y);
}

add(10,20); //10 and 20 are called arguments
add(12,32);


function subtract(x,y){
    return x - y;
}

let result = subtract(100,20);
console.log(result);




// multiply

function multiply(x,y){
    console.log(x*y);
}

add(10,20);
add(12,32);


// divide 

function divide(x,y){
    return x / y;
}

let result1 = divide(100,20);
console.log(result1);


// function to print cube of a number and print in alert

function cube(x){
    return x*x*x;
}
let result2 = cube(4);
alert(result2);


// Functiont to print name

function name1(x){
    console.log();
    return x;
}
let result3 = name1("tushar");
console.log(result3);A