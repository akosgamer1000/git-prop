
let  numbers=[]


document.getElementById("nyom").addEventListener("click",()=>{
    let hozzaadando=document.getElementById("mező").value
    numbers.push(hozzaadando)
    let ellem=document.createElement("li")
    ellem.textContent=hozzaadando + ",";
    let list=document.getElementById("ul").appendChild(ellem)
   
   
})

document.getElementById("max").addEventListener("click",()=>{
    let max=0;
    for(let i=0;i<numbers.length;i++){
        if(max<numbers[i]){
            max=numbers[i]
            

        }
        
    }
    
    let h1=document.getElementById("maxhely");
    h1.textContent="A legnagyobb  érték a listában :" + max

})