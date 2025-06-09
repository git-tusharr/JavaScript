let count = 0;

let updateDisplay = () => {
  document.querySelector('#number').innerHTML = count;
};

let increase=()=>{
    let inc=document.querySelector("#number");
    count++;
    updateDisplay();
}

let decrease=()=>{
    let dec=document.querySelector("#number");
   count--;
   updateDisplay();
}


let reset=()=>{
    let res=document.querySelector("#number");
    count=0;
    updateDisplay();
}