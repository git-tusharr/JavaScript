// let Time=new Date();

// console.log(Time);
// console.log(Time.toLocaleString);



// console.log(Time.getFullYear());
// console.log(Time.getMonth());
// console.log(Time.getDay());
// console.log(Time.getDate());


// // que- 
// let Time=new Date();
// let Days=["Sun","Mon","Tue","Wed","Thr","Fri","Sat"]
// let Year=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]



// // console.log(Time.getDay());  // 3
// console.log(Days[Time.getDay()])
        


// // console.log(Time.getMonth());  // 6
// console.log(Year[Time.getMonth()])





// setTimeout - Runs the function after some set interval

// console.log("Start")


// setTimeout(() => {

//     console.log("Pending")

// }, 3000);


// console.log("End")





// setInterval - Runs the function repeatdly after an interval

// console.log("Start")


// setInterval(() => {

//     console.log("Pending")

// }, 3000);


// console.log("End")





// Print counter in console

let count=0;
let inter;

let start=()=>{

    inter=setInterval(() => {
    console.log(count)
    count++;
}, 1000)
}

let stop=()=>{

    let end=clearInterval(inter)

}














