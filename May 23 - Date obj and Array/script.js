// // new Date();

// let d = new Date();
// console.log(d);


// // new Date(year,month,day,hours,minutes,seconds,milliseconds)
// // In js jan starts from 0 and so december is 11th
// d = new Date(2020,14,22,12,24,45,300);
// d = new Date(2020,14,22,12,24,45);
// d = new Date(2020,14,22,12,24);
// d = new Date(2020,14,22,12);
// d = new Date(2020,14,22);
// d = new Date(2020,14);
// d = new Date(2020);// Single digit is treated as milliseconds and js adds the milliseconds to jan 1 1970 5:30 date
// console.log(d);

// d=new Date("07-10-2022");
// console.log(d);


// d=new Date("2022-07-10 12:30:34");
// console.log(d);

// // Date.now() method gives the date in milliseconds
// d = Date.now();
// console.log(d);



// // 
// let mydate = new Date();
// let x;
// x = mydate.getFullYear();
// console.log(x);

// x = mydate.getMonth();
// console.log(x);

// x = mydate.getDay();
// console.log(x);

// x = mydate.getHours();
// console.log(x);

// x = mydate.getMinutes();
// console.log(x);

// x = mydate.getSeconds();
// console.log(x);

// x = mydate.getMilliseconds();
// console.log(x);

// task - find the age of the user

// let birthYear=prompt("enter your Birth year");
// console.log(birthYear);
// let thisYear =new Date;
// let currentYear=thisYear.getFullYear();
// let age = currentYear-birthYear;
// console.log("Your current age is : "+age);





// Array


// // Array using array literal
// const numbers = [1,2,3,4,5,6,7];
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);

// // update the values in a array

// numbers[0]=100;
// console.log(numbers);


// const names=["Vineet","Arvind","Sarvagya","Gauri"];
// console.log(names);
// console.log(names[0]);


const mixed = [
    "John",
    34,
    true,
    null,
    undefined,
    {name:"harry", age:25},
    [100,200]
];

console.log(mixed[0]);

// console.log(mixed);
console.log(mixed[5].name);
// console.log(mixed[5].age);
console.log(mixed[6][1]);



