let digital=()=>{


    setInterval(() => {

        let Time=new Date();

    let hours=Time.getHours();
    let minutes=Time.getMinutes();
    let seconds=Time.getSeconds();

    let Show=document.querySelector("#show")
    Show.innerHTML=`${hours} :${minutes} :${seconds}`
        
    }, 1000);

    
}