// iife (immediety  invoked function expression)-a function that is declared and invoked at same time

(
    function(){
        let x= "hello";
        console.log(x);
    }
)();



// // loops-

// for loop
// while loopdo while loop

// in js we will study-

// for in
// for Of
// foreach

// 1. for loop :-

// for(let i=0;i<10;i++)
// {
//     console.log(i);
// }

// // for loop for even numbers

for(let i=0;i<100;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}

// // for loop for odd numbers

// for(let i=0;i<100;i++)
// {
//     if(i%2!=0)
//     console.log(i);
// }



//   // while loop

// let i=0;
// while(i<10){
//     console.log(i);
//     i++
// }


// // do while loop

// let x=11;
// do{
//     console.log(x);
//     x++;
// }
// while(x<20);



// for in loop(used for object and array) - used to through the properties of an object

// for (key in objectname){ code to be executed }


const person = {
    name:"john",
    age:19,
    city:"bhopal",
    state:"MP",
    country:"India",
}

// for (let x in person){
//     console.log(person[x]);
// }

// for array
// const numbers = [10,20,30,40,50,60]
// for(let x in numbers)
// {
//     console.log(numbers[x]);
// }

// const fruits = ["apple","banana","grapes","kiwi"];
// for(let x in fruits) // x denotes index number
// {
//     console.log(fruits[x]);
// }



// for(let i =0;i<fruits.length;i++)
// {
//     console.log(fruits[i]);
// }

// for of loop
const fruits = ["apple","banana","grapes","kiwi"];
for(let x of fruits)
{
    console.log(x);
}


let value = "Sundayyyyyyyy!!YAYYYYY"
for(let i of value)
{
    console.log(i);
} 