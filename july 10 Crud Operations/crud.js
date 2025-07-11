let FetchData=async()=>{
    let  url='http://localhost:3000/data'

    let res=await fetch(url,{method:"GET"})

    let data=a=await( res).json()

    console.log(data)
}

let DataShow=()=>{

    let Show=document.querySelector("#DataShow")
     Show.innerHTML=""

    data.map((e)=>{
        Show.innerHTML+=`
        <tr>
            <td>${e.Name}</td>
            <td>${e.Email}</td>
            <td>${e.City}</td>
            <td>${e.Age}</td>
            <td>${e.Number}</td>
        </tr>
        `
    })

}