
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

document.getElementById("min").addEventListener("click",()=>{
    let min=99999;
    numbers.forEach(element => {
        if(element<min){
            min=element
        }
        
    });
    let h1=document.getElementById("minhely");
    h1.textContent="A legkissebb érték a listában :" + min

})