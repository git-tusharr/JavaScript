let FetchData=async()=>{

    let url='http://localhost:3000/railway'


    let res=await fetch(url,{method:"GET"})

    let data =await res.json()

    console.log(data);

    let show=document.querySelector("#datashow")

    data.map((e)=>{
    show.innerHTML+=`
    <tr> 
        <td>${e.name}</td>
        <td>${e.adhar}</td>
        <td>${e.checkIn}</td>
        <td>${e.checkOut}</td>
        <td>${e.city}</td>
        <td>${e.person}</td>
        <td>${e.total}</td>
    </tr>
    
    `
})
    

}

FetchData();

