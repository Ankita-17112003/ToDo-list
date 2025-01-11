let inp = document.querySelector('input');
let body = document.querySelector('body');
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");

btn.addEventListener("click",function(){
    let task = inp.value;
    let item = document.createElement("li");
    item.innerText=task; 

    let delBtn = document.createElement("button"); 
    delBtn.innerText="Delete";  
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    // inp.value = "";
    
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove()
        
    }
    
    
    
    
})












// let delBtns= document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;;
//         console.log(par);
//         par.remove();
        
//     });
    
// }



