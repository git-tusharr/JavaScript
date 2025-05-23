var age="Eighteen";
console.log(age);

// var / let /const

// only declareation are valid in var and let not allowed in const
const a=10;
console.log(a);

// Reinitialize are only possible in let and var we cant reinitialize variables of const

var b=100;
b=200;
console.log(b);


// Redeclareation is possible in var not possible in let and const
var firstName="john";
var firstName="Harry";
console.log(firstName)


// DataTypes 

// primitive-strings,number,bool,null,undefined,symbol,bigint

var output = 23.67;
output="hello";
output=true;
output=125456555255n;
output=Symbol("id");
console.log(output, typeof output);




// reference-three types of reference datatypes are object literals,functions and arrays


