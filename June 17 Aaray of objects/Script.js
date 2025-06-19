// let student=[{
//     name:"Tushar",
//     age:23,
//     city:"bhopal"},
//     {
//     name:"shabbir",
//     age:15,
//     city:"agra"},
//     {
//     name:"amit",
//     age:55,
//     city:"indore"},
//     {
//     name:"piyush",
//     age:25,
//     city:"pahalgam"}
// ]

// let show=document.querySelector("#datashow");

// student.map((e)=>{
//     show.innerHTML+=`
//     <tr>
//         <td>${e.name}</td>
//         <td>${e.city}</td>
//         <td>${e.age}</td>
    
//     </tr>
    
//     `
// })





// Aaray of object =


let details=[
    {
        name:"tushar",
        age:18,
        semester:2

    },
    {
        name:"prashant",
        age:20,
        semester:4

    },
    {
        name:"piyush",
        age:19,
        semester:3

    }
]


let studentDetails=document.querySelector("#details")

details.map((e)=>{
    studentDetails.innerHTML+=`
    <tr> 
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.semester}</td>
    
    </tr>
    
    `
})

