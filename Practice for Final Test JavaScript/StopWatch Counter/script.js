let watch=null;
let seconds = 50;
let minutes = 0;
let display=document.querySelector("#display")

let start=()=>{
     watch = setInterval(() => {
            seconds++;

            if (seconds > 59) {
                minutes++;
                seconds = 0;
            }

            if (seconds < 10) {
                display.innerHTML = minutes + ":0" + seconds;
            } else {
                display.innerHTML = minutes + ":" + seconds;
            }

        }, 1000);
}

let stop=()=>{
    let end=clearInterval(watch)
}

let reset=()=>{
    display.innerHTML=""
}