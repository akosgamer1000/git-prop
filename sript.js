
let  numbers=[]


document.getElementById("nyom").addEventListener("click",()=>{
    let hozzaadando=document.getElementById("mező").value
    numbers.push(hozzaadando)
    let ellem=document.createElement("li")
    ellem.textContent=hozzaadando + ",";
    let list=document.getElementById("ul").appendChild(ellem)
    console.log("az")
    console.log(numbers)
})