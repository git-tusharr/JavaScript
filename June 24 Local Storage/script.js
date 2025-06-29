
let sett=()=>{
    localStorage.setItem("Age",19)
    localStorage.setItem("Name","tushar")
    location.reload();
}

let show=document.querySelector("#showname")
// let name=localStorage.getItem("Name")
show.innerHTML=localStorage.getItem("Name")

let remove=()=>{
    localStorage.removeItem("Name")
    location.reload();
    
}