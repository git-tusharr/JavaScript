// Object literal

const person = {
    name:"John",
    age:23,
    iseligible:true,
    address:{
        city:"bhopal",
        state:"MP"
    },
    hobby:["dance","singing"],
};

// get the value

console.log(person.name);
console.log(person["age"]);
console.log(person.iseligible);
console.log(person["iseligible"]);
console.log(person.address.city);
console.log(person.hobby[1]);


// updates values

person.iseligible=false;
person.name = "harry potter";
console.log(person);


//contructor

const student = new Object();

student.id = 1;
student.name = "john";
console.log(student);


// Array of objects

const movies = [
    {title:"KGF",release:2025},
    {title:"stranger things",release:2020},
    {title:"harry potter",release:2010},
];

console.log(movies[1].release);
console.log(movies[2].title);


// spread operator(...)
const obj1= {a:1,b:2};
const obj2= {c:3,d:4};
const obj3={...obj1,...obj2};
console.log(obj3);


// destructuring

const todo = {
    id:1,
    title:"something",
    user:"john",
};


// let a=todo.id
// let b=todo.title
const {id,title,user}=todo;
console.log(title);

// OR

const {id:a,title:b,user:c}=todo;
console.log(c);


const user ={
    id:1,
    name:"Rahul",
    age:23,
    city:"bhopal",
};

// convert obj to Json string

const jasonuser = JSON.stringify(user);
console.log(user);
console.log(jasonuser);

// conver json to object

const backtoobject = JSON.parse(jasonuser);
console.log(backtoobject);