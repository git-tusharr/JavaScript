const mystring="developer";
x=mystring.charAt(0).toUpperCase()+mystring.slice(1);             
console.log(x);




//  String

var str=" Javascript is a great language , Javascript          ";
var str1="react";

// concatenation

var newString=str+" "+str1;
newString=`${str} and ${str1}`;
console.log(newString);

// String methods

let x;
// returns the number of character at index
x=str.length;
console.log(x);      

// chatAt-returns character at index

x=str.charAt(5);
console.log(x); 

// indexOf -returns index number of first occurence of character

x=str.indexOf("t");

// toUpperCase-changes to upper case
x=str.toUpperCase();
console.log(x);

// toLowerCase-changes to lower case
x=str.toLowerCase();
console.log(x);


// Replace - replaces the text

x=str.replace("Javascript","Typescript")
console.log(x);

// x=str.replaceALL("Javascript","Typescript")
// console.log(x);

// check if the text is presnt in the string or not

x=str.includes("is");

// trim-removes the whitespace from the starting and ending
x=str.trim();
console.log(x);


// slice - starting index,ending index not included
x=str.slice(1,20);
console.log(x);

// subString 

x=str.substring(5,35);
console.log(x);   

 




