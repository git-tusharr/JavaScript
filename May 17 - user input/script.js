//  object literal

const person = {
    name:"john",
    age:23,
    city:"London",
};

console.log(person, typeof person)
console.log(person.name)
console.log(person.age)
console.log(person.city)



// Arrays

const numbers = [1,2,3,4,5,6];
console.log(numbers, typeof numbers)
console.log(numbers[0])
console.log(numbers[2])
console.log(numbers[5])



// Functions

function greet()
{
    // code 
    console.log("greetings from me")
    
}

greet();
console.log(greet, typeof greet)

// operators

let x=10;
let y="10";

// let z=x+y;
// z=x-y;
// z=x*y;
// z=x%y;
// z=x/y;

// equality operators -
// it compares the value along with data types
if(x===y)
{
    console.log("equal")
}
else
{
    console.log("not equal")
}


// type conversion

let num = "100";
num=Number(num);
console.log(num, typeof num)


let num1=300;
num1=num1.toString();
console.log(num1, typeof num1);


// user input


// let firstName=prompt("enter your name");
// console.log(firstName);
// let age=prompt("enter your age");
// console.log(age);
// let city=prompt("enter your city");
// console.log(city);
// let course=prompt("enter your course");
// console.log(course);

// parseInt & parseFloat 
// let num2 = parseFloat(prompt("enter number"));
// console.log(num2);


// Operations of two numbers

// let n1 = parseFloat(prompt("enter number 1"));
// let n2 = parseFloat(prompt("enter number 2"));
// console.log(n1+n2);
// console.log(n1-n2);
// console.log(n1*n2);


// Practice - 


let a = prompt("Enter a number");
let b = prompt("enter second number");

console.log("sum of"+a+" and "+b+" is "+a+b);

if(a==b)
{
    console.log("same");
}
else
{
console.log("different");
}







