// Array using new constructor

const arr = new Array();

arr[0]="apple";
arr[1]="cheryy";
arr[2]=100;
console.log(arr);


// Array using feom method

const aar1 = Array.from("123456");
console.log(aar1);

// Methods


// 1. push method - add an element in the end of an array

const numbers1 = [10,20,30,40,50];
numbers1.push(60);
console.log(numbers1);


// 2. pop method - removes an element from the end of an array

numbers1.pop();
console.log(numbers1);

// 3. shift method - removes an element from the starting of an array

numbers1.shift();
console.log(numbers1);

// 4. unshift - adds an element to start of an array

numbers1.unshift(10);
console.log(numbers1);

// 5. reverse - reverses the array

numbers1.reverse();
console.log(numbers1);

// 6. length- returns the length of the array

let x;
x= numbers1.length;
console.log(x);

// 7. include - checks if the element is included or not

x = numbers1.includes(50);
console.log(x);

// 8. indexof - returns the index number of the element

x = numbers1.indexOf(30);
console.log(x);
 
// 9. toString and join - converting array to string

x = numbers1.toString();
x= numbers1.join()
console.log(x);

// 10. split - convert an string to an array

// x = x.split(",");
// console.log(x);


// 11. slice - takes starting and ending index and removes them 
x=numbers1.slice(0,3);
console.log(x);

// 12. splice - works like slice except it takes the stating index and the number of element to remove (also changes the orignal array)

x = numbers1.splice(0,2);
console.log(x);

// splice to add an elements

x = numbers1.splice(0,0,100,200,300);
console.log(numbers1);
console.log(x);

// 13. chaining array method


x = numbers1.slice(1,4).reverse().toString().charAt(0);
console.log(numbers1);
console.log(x);


// 14. concat method - combines two arrays

const fruits = ["apple","cherry","kiwi"];
const veggies = ["Lemon","cucumber","cauliflower"];

const mixed = fruits.concat(veggies);
console.log(mixed);


// 15. spread operator (...)-- copies a part of an array or complete array to another array

const newArray = [...fruits,...veggies]


// 16. Destructuring - putting the elements of the array into variables

const array = [1,2,3,4,5,6,7,8];
// let a = array[0]
// let a = array[0]

const[a,b,c,d,...y]=array;
console.log(a);
console.log(b);
console.log(y);








